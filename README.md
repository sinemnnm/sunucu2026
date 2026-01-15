# Sipariş Takip Sistemi - REST API

## Proje Açıklaması
Bu proje Node.js (Express) kullanılarak MVC mimarisine uygun ve REST prensiplerine göre geliştirilmiş bir sipariş takip sistemi API’sidir.

## Senaryo
Sistemde müşteri siparişleri eklenebilir, listelenebilir, güncellenebilir ve silinebilir.

## İş Kuralları
- Sipariş adedi 0 veya negatif olamaz.
- Durumu "Teslim Edildi" olan sipariş silinemez.

## Kurulum
npm install  
node app.js  

## API Endpointleri
POST /api/siparisler  
GET /api/siparisler  
PUT /api/siparisler/:id  
DELETE /api/siparisler/:id  

## ER Diyagramı
docs/er_diagram.png
