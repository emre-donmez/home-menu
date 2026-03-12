# Home Bar Menu ☕

Evdeki kahve ve içecek menünüzü yönetmek için modern, mobil öncelikli bir web uygulaması. Her içeceğin malzemeleri, oranları ve adım adım hazırlanış tarifleri yer almaktadır.

A modern, mobile-first web app for managing your home coffee & drink menu. Each drink includes ingredients, ratios, and step-by-step preparation instructions.

## ✨ Özellikler / Features

- ☕ **Kahve dolum animasyonu / Coffee fill animation** — Bir içeceğe tıkladığınızda fincan kahve ile dolarak açılır / When you tap a drink, the cup fills with coffee before the recipe opens
- 🌍 **Türkçe & İngilizce / Turkish & English** — Varsayılan dil Türkçe, tek dokunuşla İngilizce'ye geçiş / Default language is Turkish, one-tap switch to English
- 📱 **Mobil öncelikli tasarım / Mobile-first design** — Telefon ekranları için optimize edilmiş / Optimized for phone screens
- 🎨 **Modern UI** — Cam efektli kartlar, yumuşak gradyanlar ve akıcı animasyonlar / Glassmorphism cards, smooth gradients, and fluid animations
- 📖 **Detaylı tarifler / Detailed recipes** — Malzemeler, oranlar, hazırlanış adımları ve servis önerileri / Ingredients, ratios, preparation steps, and serving suggestions

## 🛠 Teknolojiler / Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🚀 Kurulum / Getting Started

```bash
# Bağımlılıkları yükle / Install dependencies
npm install

# Geliştirme sunucusu / Development server
npm run dev

# Üretim derlemesi / Production build
npm run build

# Lint kontrolü / Lint check
npm run lint
```

## 📂 Proje Yapısı / Project Structure

```
src/
├── components/       # UI bileşenleri / UI components
│   ├── CategoryTabs.jsx
│   ├── DrinkCard.jsx
│   ├── DrinkGrid.jsx
│   ├── DrinkModal.jsx
│   └── WelcomeHeader.jsx
├── data/
│   └── drinks.js     # İçecek verileri / Drink data
├── i18n/             # Çoklu dil desteği / Internationalization
│   ├── context.js
│   ├── LanguageContext.jsx
│   ├── translations.js
│   └── useLanguage.js
├── pages/
│   └── MenuPage.jsx  # Ana sayfa / Main page
├── App.jsx
├── main.jsx
└── index.css
```

## 📝 Lisans / License

MIT
