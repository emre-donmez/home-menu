# ☕ Home Menu

**TR** | [EN](#english)

---

## Türkçe

Evdeki kahve ve içecek menüsü için hazırlanmış, sade ve şık bir web uygulaması.

### Özellikler

- ☕ Espresso bazlı kahveler, soğuk içecekler, geleneksel içecekler ve diğer seçenekler
- 🌐 Türkçe / İngilizce dil desteği (varsayılan: Türkçe)
- 📱 Mobil uyumlu, tam ortalanmış modal
- 🎨 Koyu / Açık tema desteği
- ⚡ React + Vite + TailwindCSS + Framer Motion

### Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

### Kurulum

```bash
npm install
npm run dev
```

### Yapı

```
src/
├── components/
│   ├── CategoryTabs.jsx   # Kategori sekmeleri
│   ├── DrinkCard.jsx      # İçecek kartı
│   ├── DrinkGrid.jsx      # İçecek ızgarası
│   ├── DrinkModal.jsx     # İçecek detay modalı
│   └── WelcomeHeader.jsx  # Başlık ve dil değiştirici
├── data/
│   └── drinks.js          # İki dilli içecek verisi
├── i18n/
│   ├── LanguageContext.jsx # Dil bağlamı (Context)
│   └── translations.js    # TR/EN çeviriler
└── pages/
    └── MenuPage.jsx        # Ana sayfa
```

---

## English

<a name="english"></a>

A clean and elegant web application for a home coffee and drinks menu.

### Features

- ☕ Espresso-based coffees, cold drinks, traditional drinks and other options
- 🌐 Turkish / English language support (default: Turkish)
- 📱 Mobile-friendly, fully centered modal
- 🎨 Dark / Light theme support
- ⚡ React + Vite + TailwindCSS + Framer Motion

### Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

### Setup

```bash
npm install
npm run dev
```

### Structure

```
src/
├── components/
│   ├── CategoryTabs.jsx   # Category tabs
│   ├── DrinkCard.jsx      # Drink card
│   ├── DrinkGrid.jsx      # Drink grid
│   ├── DrinkModal.jsx     # Drink detail modal
│   └── WelcomeHeader.jsx  # Header & language toggle
├── data/
│   └── drinks.js          # Bilingual drink data
├── i18n/
│   ├── LanguageContext.jsx # Language context
│   └── translations.js    # TR/EN translations
└── pages/
    └── MenuPage.jsx        # Main page
```

