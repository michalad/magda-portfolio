# Magda Adamek - Portfolio

Profesjonalna strona internetowa dla firmy zajmującej się montażem filmów z wakacji. Projekt stworzony w Next.js 16 z TypeScript i Tailwind CSS.

## 🎬 Funkcjonalności

- **Responsywny design** - strona dostosowana do urządzeń mobilnych, tabletów i desktopów
- **Portfolio z filmami** - galeria z wbudowanymi odtwarzaczami YouTube i Vimeo
- **Sekcja O mnie** - prezentacja umiejętności i doświadczenia
- **Formularz kontaktowy** - łatwy sposób na nawiązanie kontaktu
- **Smooth scrolling** - płynne przewijanie między sekcjami
- **Nowoczesny UI** - gradient backgrounds, animacje hover, modal z filmami

## 🚀 Uruchomienie projektu

### Wymagania

- Node.js 18.17 lub nowszy
- npm, yarn, pnpm lub bun

### Instalacja i uruchomienie

```bash
# Instalacja zależności (już zainstalowane)
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Uruchomienie wersji produkcyjnej
npm start
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce aby zobaczyć stronę.

## 📁 Struktura projektu

```
magda-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout aplikacji
│   │   ├── page.tsx         # Strona główna
│   │   └── globals.css      # Globalne style
│   └── components/
│       ├── Navigation.tsx   # Menu nawigacyjne
│       ├── Hero.tsx         # Sekcja hero
│       ├── About.tsx        # Sekcja o mnie
│       ├── Portfolio.tsx    # Galeria portfolio
│       ├── Contact.tsx      # Formularz kontaktowy
│       └── Footer.tsx       # Stopka
├── public/                  # Pliki statyczne
└── package.json
```

## 🎨 Technologie

- **Next.js 16** - React framework z App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - useState dla interaktywności

## ✏️ Personalizacja

### Zmiana filmów w portfolio

Edytuj plik `src/components/Portfolio.tsx` i zaktualizuj tablicę `videos`:

```typescript
const videos: Video[] = [
  {
    id: "1",
    title: "Twój tytuł",
    description: "Opis filmu",
    platform: "youtube", // lub "vimeo"
    videoId: "ID_TWOJEGO_FILMU",
  },
  // ... więcej filmów
];
```

### Zmiana danych kontaktowych

Edytuj plik `src/components/Contact.tsx` i zaktualizuj dane:
- Email
- Telefon
- Linki do social media

### Zmiana kolorów

Domyślny schemat kolorów używa fioletowych i różowych gradientów. Możesz je zmienić w Tailwind CSS:
- `purple-600`, `pink-600` - główne kolory
- `blue-600` - akcenty

## 📦 Deployment

### Vercel (zalecane)

Najłatwiejszy sposób wdrożenia aplikacji Next.js:

1. Push kod do GitHub
2. Zaimportuj projekt na [Vercel](https://vercel.com)
3. Vercel automatycznie wykryje Next.js i skonfiguruje build

### Inne platformy

Aplikacja może być wdrożona na:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Własny serwer z Node.js

## 📝 Notatki

- **YouTube IDs**: Zastąp przykładowe ID filmów (`dQw4w9WgXcQ`) prawdziwymi ID z YouTube
- **Vimeo IDs**: Zastąp przykładowe ID (`123456789`) prawdziwymi ID z Vimeo
- **Zdjęcia**: Dodaj własne zdjęcia do katalogu `public/` i zaktualizuj komponenty
- **SEO**: Zaktualizuj metadata w `src/app/layout.tsx`

## 📄 Licencja

Projekt stworzony dla Magdy Adamek - Portfolio.
