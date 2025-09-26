#!/usr/bin/env python3
import http.server
import socketserver
import json
import urllib.parse
import os
import re
from datetime import datetime

class HealthAssistant:
    def __init__(self):
        self.emergency_keywords = [
            'göğüs ağrısı', 'nefes alamama', 'bilinç kaybı', 'şiddetli baş ağrısı',
            'kırık', 'kanama', 'yoğun kusma', 'yüksek ateş', 'felç', 'kalp krizi',
            'solunum güçlüğü', 'şiddetli karın ağrısı', 'zehirlenme', 'yanık',
            'göğüs ağrı', 'nefes darlığı', 'bilinç kayb', 'şiddetli baş ağr',
            'şiddetli ağrı', 'bayılma', 'kalp çarpıntısı şiddetli'
        ]
        
        # Disease-symptom mapping (simplified rule-based system)
        self.disease_symptoms = {
            'Soğuk Algınlığı': ['burun akıntısı', 'öksürük', 'boğaz ağrısı', 'hafif ateş', 'hapşırık'],
            'Grip': ['yüksek ateş', 'kas ağrısı', 'yorgunluk', 'öksürük', 'baş ağrısı', 'titreme'],
            'Migren': ['şiddetli baş ağrısı', 'bulantı', 'ışık hassasiyeti', 'ses hassasiyeti'],
            'Gastrit': ['mide ağrısı', 'bulantı', 'kusma', 'şişkinlik', 'hazımsızlık'],
            'İdrar Yolu Enfeksiyonu': ['yanık hissi', 'sık idrara çıkma', 'karın ağrısı', 'bulanık idrar'],
            'Alerjik Reaksiyon': ['kaşıntı', 'döküntü', 'şişlik', 'hapşırık', 'kızarıklık'],
            'Anksiyete': ['kalp çarpıntısı', 'terleme', 'nefes darlığı', 'gerginlik', 'uyku bozukluğu'],
            'Hipertansiyon': ['baş ağrısı', 'bulanık görme', 'boyun ağrısı', 'baş dönmesi'],
            'Sinüzit': ['burun tıkanıklığı', 'yüz ağrısı', 'baş ağrısı', 'burun akıntısı']
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
            'Hipertansiyon': 'Kardiyoloji / Dahiliye',
            'Sinüzit': 'Kulak Burun Boğaz'
        }

        # Sample hospitals for Turkey
        self.hospitals = [
            {'name': 'Hacettepe Üniversitesi Hastanesi', 'city': 'Ankara', 'type': 'Devlet'},
            {'name': 'Ankara Şehir Hastanesi', 'city': 'Ankara', 'type': 'Devlet'},
            {'name': 'İstanbul Üniversitesi İstanbul Tıp Fakültesi', 'city': 'İstanbul', 'type': 'Devlet'},
            {'name': 'Ege Üniversitesi Tıp Fakültesi Hastanesi', 'city': 'İzmir', 'type': 'Devlet'},
            {'name': 'Acıbadem Hastanesi', 'city': 'İstanbul', 'type': 'Özel'},
            {'name': 'Memorial Hastanesi', 'city': 'İstanbul', 'type': 'Özel'},
            {'name': 'Medicana Hastanesi', 'city': 'Ankara', 'type': 'Özel'},
            {'name': 'Liv Hospital', 'city': 'İstanbul', 'type': 'Özel'}
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
                'recommendations': ['Derhal 112 acil servisi arayın', 'En yakın hastaneye gidin', 'Sakin kalmaya çalışın']
            }
        
        # Predict disease based on symptoms
        predicted_diseases = self.predict_disease(normalized_symptoms)
        
        if not predicted_diseases:
            return {
                'emergency': False,
                'message': 'Belirtiler genel sağlık kontrolü gerektirebilir.',
                'predicted_diseases': ['Genel Kontrol Gerekli'],
                'recommended_institution': 'Aile Hekimliği',
                'hospitals': self.hospitals[:5],
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
            'hospitals': self.hospitals[:5],
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
            matches = 0
            for disease_symptom in disease_symptoms:
                for user_symptom in symptoms:
                    if disease_symptom.lower() in user_symptom or user_symptom in disease_symptom.lower():
                        matches += 1
                        break
                if any(disease_symptom.lower() in symptom_text for symptom in symptoms):
                    score += 1
            
            if matches > 0:
                disease_scores[disease] = matches / len(disease_symptoms)
        
        # Sort diseases by score
        sorted_diseases = sorted(disease_scores.items(), key=lambda x: x[1], reverse=True)
        
        return [disease for disease, score in sorted_diseases if score > 0.2]

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
                'Burun temizliğine dikkat edin',
                'C vitamini alabilirsiniz'
            ],
            'Grip': [
                'Tam istirahat yapın', 
                'Ateş düşürücü kullanabilirsiniz',
                'Doktor kontrolü önemli',
                'İzolasyon uygulayın'
            ],
            'Migren': [
                'Karanlık ve sessiz ortamda dinlenin',
                'Stres yönetimi yapın',
                'Nöroloji uzmanına başvurun',
                'Düzenli uyku saatleri'
            ],
            'Gastrit': [
                'Hafif yiyecekler tüketin',
                'Baharatlı ve asitli yiyeceklerden kaçının',
                'Gastroenteroloji kontrolü yaptırın',
                'Stres azaltın'
            ]
        }
        
        return disease_specific.get(disease, base_recommendations)


class HealthServerHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        self.health_ai = HealthAssistant()
        super().__init__(*args, **kwargs)

    def do_GET(self):
        if self.path == '/' or self.path == '/index.html':
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            
            # Read and serve the HTML file
            try:
                with open('index.html', 'r', encoding='utf-8') as file:
                    content = file.read()
                self.wfile.write(content.encode('utf-8'))
            except FileNotFoundError:
                self.wfile.write(b'HTML file not found')
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == '/analyze':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                symptoms = data.get('symptoms', [])
                location = data.get('location', {})
                
                if not symptoms:
                    self.send_response(400)
                    self.send_header('Content-type', 'application/json; charset=utf-8')
                    self.end_headers()
                    response = {'error': 'Semptom bilgisi gerekli'}
                    self.wfile.write(json.dumps(response, ensure_ascii=False).encode('utf-8'))
                    return
                
                # Analyze symptoms and get recommendations
                result = self.health_ai.analyze_symptoms(symptoms, location)
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps(result, ensure_ascii=False).encode('utf-8'))
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.end_headers()
                response = {'error': f'Analiz hatası: {str(e)}'}
                self.wfile.write(json.dumps(response, ensure_ascii=False).encode('utf-8'))

        elif self.path == '/emergency':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                symptoms = data.get('symptoms', [])
                
                is_emergency = self.health_ai.is_emergency(symptoms)
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.end_headers()
                response = {
                    'is_emergency': is_emergency,
                    'message': '⚠️ 112 ACİL SERVİS ARAYIN! ⚠️' if is_emergency else 'Acil durum tespit edilmedi'
                }
                self.wfile.write(json.dumps(response, ensure_ascii=False).encode('utf-8'))
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.end_headers()
                response = {'error': f'Acil durum kontrolü hatası: {str(e)}'}
                self.wfile.write(json.dumps(response, ensure_ascii=False).encode('utf-8'))

        else:
            self.send_response(404)
            self.end_headers()


if __name__ == '__main__':
    PORT = 8080
    
    print(f"SymptoCare AI Sağlık Asistanı başlatılıyor...")
    print(f"Sunucu http://localhost:{PORT} adresinde çalışacak")
    print(f"Çıkmak için Ctrl+C tuşlarına basın")
    
    with socketserver.TCPServer(("", PORT), HealthServerHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nSunucu kapatılıyor...")