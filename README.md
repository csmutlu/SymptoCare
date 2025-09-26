# SymptoCare - AI Sağlık Asistanı

**SymptoCare**, kullanıcıların semptomlarını analiz eden, hastalık tahminleri yapan ve uygun sağlık kuruluşlarını öneren yapay zeka destekli bir sağlık asistanı uygulamasıdır.

## Özellikler

- 🧠 **Yapay Zeka Destekli Semptom Analizi**: Girilen semptomlara göre hastalık tahminleri
- 🏥 **Sağlık Kuruluşu Önerisi**: Tahmin edilen hastalığa göre uygun bölüm önerileri
- 🚨 **Acil Durum Tespiti**: Kritik semptomları tanıyarak 112'yi arama uyarısı
- 📍 **En Yakın Hastane Listesi**: Türkiye'deki önemli hastanelerin listesi
- 💊 **Genel Sağlık Önerileri**: Hastalığa özel bakım ve tedavi önerileri
- 🇹🇷 **Türkçe Dil Desteği**: Tamamen Türkçe arayüz ve içerik

## Teknoloji Stack

- **Backend**: Python (http.server)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI/ML**: Kural tabanlı karar sistemi
- **Tasarım**: Responsive web tasarım
- **İkonlar**: Font Awesome

## Kurulum ve Çalıştırma

### Gereksinimler
- Python 3.x

### Kurulum Adımları

1. **Repository'yi klonlayın:**
   ```bash
   git clone https://github.com/csmutlu/SymptoCare.git
   cd SymptoCare
   ```

2. **Sunucuyu başlatın:**
   ```bash
   python server.py
   ```

3. **Tarayıcınızda açın:**
   ```
   http://localhost:8080
   ```

## Kullanım

### Semptom Girişi
- Semptomlarınızı metin kutusuna yazın ve "Ekle" butonuna tıklayın
- Hızlı seçim butonlarını kullanarak yaygın semptomları ekleyin
- X butonuyla istemediğiniz semptomları kaldırın

### Analiz Türleri

1. **Normal Analiz**: "Analiz Et" butonu
   - Hastalık tahminleri
   - Önerilen sağlık kuruluşu
   - En yakın hastaneler listesi
   - Genel sağlık önerileri

2. **Acil Durum Kontrolü**: "Acil Durum Kontrolü" butonu
   - Kritik semptom tespiti
   - 112 arama uyarısı
   - Acil müdahale önerileri

### Desteklenen Hastalıklar

- **Soğuk Algınlığı**: Burun akıntısı, öksürük, boğaz ağrısı
- **Grip**: Yüksek ateş, kas ağrısı, yorgunluk
- **Migren**: Şiddetli baş ağrısı, bulantı, ışık hassasiyeti
- **Gastrit**: Mide ağrısı, bulantı, şişkinlik
- **İdrar Yolu Enfeksiyonu**: Yanık hissi, sık idrara çıkma
- **Alerjik Reaksiyon**: Kaşıntı, döküntü, şişlik
- **Anksiyete**: Kalp çarpıntısı, terleme, gerginlik
- **Hipertansiyon**: Baş ağrısı, bulanık görme
- **Sinüzit**: Burun tıkanıklığı, yüz ağrısı

### Acil Durum Semptomları

Sistem aşağıdaki semptomları tespit ettiğinde acil durum uyarısı verir:

- Göğüs ağrısı
- Nefes alamama/darlığı
- Bilinç kaybı
- Şiddetli baş ağrısı
- Kırık ve ciddi yaralanmalar
- Şiddetli kanama
- Zehirlenme belirtileri
- Ciddi yanıklar

## Güvenlik ve Yasal Uyarılar

⚠️ **UYARI**: Bu uygulama sadece bilgilendirme amaçlıdır ve tıbbi tanı koyma amacı taşımaz. Kesin tanı ve tedavi için mutlaka bir sağlık uzmanına başvurun.

- Uygulama tıbbi tavsiye vermez
- Acil durumlarda derhal 112'yi arayın
- Şüpheli durumlarda doktor kontrolünden geçin
- İlaç kullanımı öncesi doktor onayı alın

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## İletişim

Proje hakkında sorularınız için GitHub Issues kullanabilirsiniz.