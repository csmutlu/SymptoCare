let symptoms = [];
let userLocation = null;

// Add symptom from input field
function addSymptom() {
    const input = document.getElementById('symptomInput');
    const symptom = input.value.trim();
    
    if (symptom && !symptoms.includes(symptom)) {
        symptoms.push(symptom);
        updateSymptomTags();
        input.value = '';
    }
}

// Add quick symptom
function addQuickSymptom(symptom) {
    if (!symptoms.includes(symptom)) {
        symptoms.push(symptom);
        updateSymptomTags();
    }
}

// Update symptom tags display
function updateSymptomTags() {
    const container = document.getElementById('symptomTags');
    container.innerHTML = '';
    
    symptoms.forEach(symptom => {
        const tag = document.createElement('div');
        tag.className = 'symptom-tag';
        tag.innerHTML = `
            ${symptom}
            <button class="remove-btn" onclick="removeSymptom('${symptom}')">×</button>
        `;
        container.appendChild(tag);
    });
}

// Remove symptom
function removeSymptom(symptom) {
    symptoms = symptoms.filter(s => s !== symptom);
    updateSymptomTags();
}

// Get user location
function getLocation() {
    const btn = document.getElementById('locationBtn');
    const status = document.getElementById('locationStatus');
    
    if (navigator.geolocation) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Konum alınıyor...';
        btn.disabled = true;
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                status.innerHTML = '<i class="fas fa-check"></i> Konum başarıyla tespit edildi';
                btn.innerHTML = '<i class="fas fa-check"></i> Konum Tespit Edildi';
                btn.disabled = false;
            },
            function(error) {
                status.innerHTML = '<i class="fas fa-times"></i> Konum alınamadı';
                btn.innerHTML = '<i class="fas fa-crosshairs"></i> Konumumu Tespit Et';
                btn.disabled = false;
                console.error('Konum hatası:', error);
            }
        );
    } else {
        status.innerHTML = '<i class="fas fa-times"></i> Tarayıcınız konum özelliğini desteklemiyor';
    }
}

// Analyze symptoms
async function analyzeSymptoms() {
    if (symptoms.length === 0) {
        alert('Lütfen en az bir semptom girin');
        return;
    }
    
    showLoading(true);
    
    try {
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                symptoms: symptoms,
                location: userLocation
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            displayResults(data);
        } else {
            throw new Error(data.error || 'Analiz hatası');
        }
        
    } catch (error) {
        console.error('Hata:', error);
        alert('Analiz sırasında bir hata oluştu: ' + error.message);
    } finally {
        showLoading(false);
    }
}

// Check emergency
async function checkEmergency() {
    if (symptoms.length === 0) {
        alert('Lütfen en az bir semptom girin');
        return;
    }
    
    showLoading(true);
    
    try {
        const response = await fetch('/emergency', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                symptoms: symptoms
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            displayEmergencyResult(data);
        } else {
            throw new Error(data.error || 'Acil durum kontrolü hatası');
        }
        
    } catch (error) {
        console.error('Hata:', error);
        alert('Acil durum kontrolü sırasında bir hata oluştu: ' + error.message);
    } finally {
        showLoading(false);
    }
}

// Display analysis results
function displayResults(data) {
    const resultsContainer = document.getElementById('resultsContent');
    
    let html = '';
    
    if (data.emergency) {
        html += `
            <div class="emergency-alert">
                <i class="fas fa-ambulance"></i>
                ${data.message}
            </div>
        `;
    } else {
        html += `
            <div class="disease-prediction">
                <h3><i class="fas fa-diagnoses"></i> Tahmin Edilen Durumlar</h3>
                <p>${data.message}</p>
                ${data.predicted_diseases ? `
                    <ul>
                        ${data.predicted_diseases.map(disease => `<li>${disease}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
            
            <div class="institution-recommendation">
                <h4><i class="fas fa-hospital"></i> Önerilen Sağlık Kuruluşu</h4>
                <p><strong>${data.recommended_institution}</strong></p>
            </div>
        `;
        
        if (data.hospitals && data.hospitals.length > 0) {
            html += `
                <div class="hospital-list">
                    <h4><i class="fas fa-map-marker-alt"></i> Yakın Hastaneler</h4>
                    ${data.hospitals.map(hospital => `
                        <div class="hospital-item">
                            <div>
                                <div class="hospital-name">${hospital.name}</div>
                                ${hospital.distance ? `<div class="hospital-distance">${hospital.distance} km uzaklıkta</div>` : ''}
                            </div>
                            <div class="hospital-type">${hospital.type}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (data.recommendations && data.recommendations.length > 0) {
            html += `
                <div class="recommendations">
                    <h4><i class="fas fa-lightbulb"></i> Öneriler</h4>
                    <ul>
                        ${data.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    }
    
    resultsContainer.innerHTML = html;
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Display emergency result
function displayEmergencyResult(data) {
    const resultsContainer = document.getElementById('resultsContent');
    
    let html = '';
    
    if (data.is_emergency) {
        html += `
            <div class="emergency-alert">
                <i class="fas fa-ambulance"></i>
                ${data.message}
                <div style="margin-top: 15px;">
                    <strong>HEMEN YAPMANIZ GEREKENLER:</strong>
                    <ul style="text-align: left; margin-top: 10px;">
                        <li>112 Acil Servis'i arayın</li>
                        <li>En yakın hastaneye gidin</li>
                        <li>Sakin kalmaya çalışın</li>
                    </ul>
                </div>
            </div>
        `;
    } else {
        html += `
            <div class="disease-prediction">
                <h3><i class="fas fa-check-circle"></i> Acil Durum Tespiti</h3>
                <p style="color: #28a745;">${data.message}</p>
                <p>Normal analiz için "Analiz Et" butonunu kullanabilirsiniz.</p>
            </div>
        `;
    }
    
    resultsContainer.innerHTML = html;
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Show/hide loading
function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
    document.getElementById('results').style.display = show ? 'none' : 'block';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Enter key support for symptom input
    document.getElementById('symptomInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addSymptom();
        }
    });
    
    // Initialize
    updateSymptomTags();
});