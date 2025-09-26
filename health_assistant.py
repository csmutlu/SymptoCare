import json
import requests
from geopy.distance import geodesic
from geopy.geocoders import Nominatim
import re

class HealthAssistant:
    def __init__(self):
        self.emergency_keywords = [
            'göğüs ağrısı', 'nefes alamama', 'bilinç kaybı', 'şiddetli baş ağrısı',
            'kırık', 'kanama', 'yoğun kusma', 'yüksek ateş', 'felç', 'kalp krizi',
            'solunum güçlüğü', 'şiddetli karın ağrısı', 'zehirlenme', 'yanık'
        ]
        
        # Disease-symptom mapping (simplified rule-based system)
        self.disease_symptoms = {
            'Soğuk Algınlığı': ['burun akıntısı', 'öksürük', 'boğaz ağrısı', 'hafif ateş'],
            'Grip': ['yüksek ateş', 'kas ağrısı', 'yorgunluk', 'öksürük', 'baş ağrısı'],
            'Migren': ['şiddetli baş ağrısı', 'bulantı', 'ışık hassasiyeti'],
            'Gastrit': ['mide ağrısı', 'bulantı', 'kusma', 'şişkinlik'],
            'İdrar Yolu Enfeksiyonu': ['yanık hissi', 'sık idrara çıkma', 'karın ağrısı'],
            'Alerjik Reaksiyon': ['kaşıntı', 'döküntü', 'şişlik', 'hapşırık'],
            'Anksiyete': ['kalp çarpıntısı', 'terleme', 'nefes darlığı', 'gerginlik'],
            'Hipertansiyon': ['baş ağrısı', 'bulanık görme', 'göğüs ağrısı']
        }
        
        # Health institution recommendations
        self.institution_mapping = {
            'Soğuk Algınlığı': 'Aile Hekimliği',
            'Grip': 'Aile Hekimliği / Dahiliye',
            'Migren': 'Nöroloji',
            'Gastrit': 'Gastroenteroloji / Dahiliye',
            'İdrar Yolu Enfeksiyonu': 'Üroloji / Dahiliye',
            'Alerjik Reaksiyon': 'Allerji / Dermatoloji',
            'Anksiyete': 'Psikiyatri / Psikoloji',
            'Hipertansiyon': 'Kardiyoloji / Dahiliye'
        }

        # Sample hospitals (in a real app, this would be from a database/API)
        self.hospitals = [
            {'name': 'Hacettepe Üniversitesi Hastanesi', 'lat': 39.9334, 'lng': 32.8597, 'type': 'Devlet'},
            {'name': 'Ankara Şehir Hastanesi', 'lat': 39.9334, 'lng': 32.8597, 'type': 'Devlet'},
            {'name': 'GATA Haydarpaşa Eğitim Hastanesi', 'lat': 41.0082, 'lng': 28.9784, 'type': 'Devlet'},
            {'name': 'İstanbul Üniversitesi İstanbul Tıp Fakültesi', 'lat': 41.0082, 'lng': 28.9784, 'type': 'Devlet'},
            {'name': 'Ege Üniversitesi Tıp Fakültesi Hastanesi', 'lat': 38.4237, 'lng': 27.1428, 'type': 'Devlet'},
            {'name': 'Acıbadem Hastanesi', 'lat': 41.0082, 'lng': 28.9784, 'type': 'Özel'},
            {'name': 'Memorial Hastanesi', 'lat': 41.0082, 'lng': 28.9784, 'type': 'Özel'}
        ]

    def analyze_symptoms(self, symptoms, location=None):
        """Analyze symptoms and provide disease prediction with recommendations"""
        
        # Clean and normalize symptoms
        normalized_symptoms = [symptom.lower().strip() for symptom in symptoms]
        
        # Check for emergency
        is_emergency = self.is_emergency(normalized_symptoms)
        if is_emergency:
            return {
                'emergency': True,
                'message': '⚠️ ACİL DURUM TESPİT EDİLDİ! HEMEN 112 ARAYIN! ⚠️',
                'recommendations': ['Derhal 112 acil servisi arayın', 'En yakın hastaneye gidin']
            }
        
        # Predict disease based on symptoms
        predicted_diseases = self.predict_disease(normalized_symptoms)
        
        if not predicted_diseases:
            return {
                'emergency': False,
                'message': 'Belirtiler genel sağlık kontrolü gerektirebilir.',
                'predicted_diseases': ['Genel Kontrol Gerekli'],
                'recommended_institution': 'Aile Hekimliği',
                'hospitals': self.get_nearest_hospitals(location) if location else [],
                'recommendations': [
                    'Aile hekiminize başvurun',
                    'Belirtiler devam ederse hastaneye gidin',
                    'Yeterli dinlenin ve sıvı tüketin'
                ]
            }
        
        # Get recommendations for the most likely disease
        primary_disease = predicted_diseases[0]
        recommended_institution = self.institution_mapping.get(primary_disease, 'Aile Hekimliği')
        
        recommendations = self.get_general_recommendations(primary_disease, normalized_symptoms)
        
        return {
            'emergency': False,
            'message': f'Belirti analizine göre {primary_disease} olabilir.',
            'predicted_diseases': predicted_diseases,
            'recommended_institution': recommended_institution,
            'hospitals': self.get_nearest_hospitals(location) if location else [],
            'recommendations': recommendations
        }

    def is_emergency(self, symptoms):
        """Check if symptoms indicate an emergency"""
        symptom_text = ' '.join(symptoms).lower()
        return any(keyword in symptom_text for keyword in self.emergency_keywords)

    def predict_disease(self, symptoms):
        """Simple rule-based disease prediction"""
        symptom_text = ' '.join(symptoms).lower()
        
        disease_scores = {}
        
        for disease, disease_symptoms in self.disease_symptoms.items():
            score = 0
            for disease_symptom in disease_symptoms:
                if any(disease_symptom.lower() in symptom_text or 
                       symptom in disease_symptom.lower() for symptom in symptoms):
                    score += 1
            
            if score > 0:
                disease_scores[disease] = score / len(disease_symptoms)
        
        # Sort diseases by score
        sorted_diseases = sorted(disease_scores.items(), key=lambda x: x[1], reverse=True)
        
        return [disease for disease, score in sorted_diseases if score > 0.3]

    def get_nearest_hospitals(self, location, max_hospitals=5):
        """Get nearest hospitals based on user location"""
        if not location or 'lat' not in location or 'lng' not in location:
            return self.hospitals[:max_hospitals]
        
        user_location = (location['lat'], location['lng'])
        
        hospitals_with_distance = []
        for hospital in self.hospitals:
            hospital_location = (hospital['lat'], hospital['lng'])
            distance = geodesic(user_location, hospital_location).kilometers
            
            hospital_info = hospital.copy()
            hospital_info['distance'] = round(distance, 2)
            hospitals_with_distance.append(hospital_info)
        
        # Sort by distance and return closest ones
        hospitals_with_distance.sort(key=lambda x: x['distance'])
        return hospitals_with_distance[:max_hospitals]

    def get_general_recommendations(self, disease, symptoms):
        """Get general health recommendations based on predicted disease"""
        base_recommendations = [
            'Belirti takibi yapın',
            'Yeterli su için',
            'Dinlenmeye önem verin'
        ]
        
        disease_specific = {
            'Soğuk Algınlığı': [
                'Bol sıvı tüketin',
                'İstirahat edin',
                'Burun temizliğine dikkat edin'
            ],
            'Grip': [
                'Tam istirahat yapın', 
                'Ateş düşürücü kullanabilirsiniz',
                'Doktor kontrolü önemli'
            ],
            'Migren': [
                'Karanlık ve sessiz ortamda dinlenin',
                'Stres yönetimi yapın',
                'Nöroloji uzmanına başvurun'
            ],
            'Gastrit': [
                'Hafif yiyecekler tüketin',
                'Baharatlı ve asitli yiyeceklerden kaçının',
                'Gastroenteroloji kontrolü yaptırın'
            ]
        }
        
        return disease_specific.get(disease, base_recommendations)