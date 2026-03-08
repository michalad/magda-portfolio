# Copilot Instructions — Magda Montuje Portfolio

## Kontekst projektu

Strona wizytówka polskiej freelancerki montażystki wideo — **Magdalena Adamek**, marka: **Magda Montuje**.
- URL produkcyjny: `https://magdamontuje.pl`
- Specjalizacja: montaż filmów wakacyjnych dla klientów indywidualnych
- **Cały content strony jest po polsku** — nie zmieniaj języka tekstu na angielski

## Stack techniczny

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** — nie używaj inline styles ani zewnętrznych bibliotek CSS
- Komponenty są domyślnie **Server Components**; dodawaj `"use client"` tylko gdy niezbędna interaktywność (hooki, event handlery)
- Dane konfiguracyjne (np. social media) trzymamy w `src/data/`, nie bezpośrednio w komponentach

## SEO — obowiązkowe zasady

Projekt ma rozbudowany setup SEO. Przy każdej zmianie treści lub dodaniu nowej strony:

1. **Każda nowa strona** (`/page.tsx`) musi eksportować `metadata` zawierające:
   - `title` (zgodnie z template `"%s | Magda Montuje"`)
   - `description` (unikalna, ~150–160 znaków)
   - `keywords` (lista fraz kluczowych po polsku)
   - `alternates.canonical` (ścieżka strony, np. `/poradniki`)
   - `openGraph` z `type`, `url`, `title`, `description`, `images`
   - `twitter` z `card`, `title`, `description`, `images`

2. **Zmiana tytułu sekcji lub kluczowych treści** = zaktualizuj odpowiednie `keywords` i `description` w metadanych

3. **Obrazy** zawsze muszą mieć atrybut `alt` — opisowy, po polsku

4. **Linki zewnętrzne** (YouTube, Vimeo, social media) powinny mieć `rel="noopener noreferrer"`

5. `BASE_URL` jest zdefiniowane w `src/app/layout.tsx` — używaj go przy generowaniu absolutnych URL-i

## Brand i tone of voice

- Ton: ciepły, osobisty — to strona autorska, nie korporacja
- Imię i nazwisko: Magdalena Adamek; marka skrócona: Magda Montuje
- Unikaj korporacyjnego języka; teksty powinny brzmieć naturalnie i przyjaźnie

## Struktura projektu

- `src/app/` — strony (App Router), `layout.tsx`, `globals.css`, `sitemap.ts`, `robots.ts`
- `src/components/` — komponenty UI wielokrotnego użytku
- `src/data/` — dane konfiguracyjne (np. linki social media)
- `public/` — zasoby statyczne (obrazy, logo)
