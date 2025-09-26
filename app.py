from flask import Flask, render_template, request, jsonify
from health_assistant import HealthAssistant
import json

app = Flask(__name__)
health_ai = HealthAssistant()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze_symptoms():
    try:
        data = request.get_json()
        symptoms = data.get('symptoms', [])
        location = data.get('location', {})
        
        if not symptoms:
            return jsonify({'error': 'Semptom bilgisi gerekli'}), 400
        
        # Analyze symptoms and get recommendations
        result = health_ai.analyze_symptoms(symptoms, location)
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': f'Analiz hatası: {str(e)}'}), 500

@app.route('/emergency', methods=['POST'])
def emergency_check():
    try:
        data = request.get_json()
        symptoms = data.get('symptoms', [])
        
        is_emergency = health_ai.is_emergency(symptoms)
        
        return jsonify({
            'is_emergency': is_emergency,
            'message': '112 ACİL SERVİS ARAYIN!' if is_emergency else 'Acil durum tespit edilmedi'
        })
    
    except Exception as e:
        return jsonify({'error': f'Acil durum kontrolü hatası: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)