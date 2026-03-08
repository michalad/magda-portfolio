import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://magdamontuje.pl";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Magda Montuje | Montaż filmów z wakacji",
    template: "%s | Magda Montuje",
  },
  description:
    "Profesjonalny montaż filmów z wakacji. Przekształcam Twoje surowe nagrania w emocjonalne, pięknie zmontowane filmy. Portfolio, realizacje, kontakt – Magdalena Adamek.",
  keywords: [
    "montaż filmów z wakacji",
    "montaż wideo",
    "montaż filmów",
    "film z wakacji",
    "montażysta wideo",
    "Magdalena Adamek",
    "Magda Montuje",
    "edycja wideo",
    "korekcja kolorów",
    "film wspomnienia",
  ],
  authors: [{ name: "Magdalena Adamek", url: BASE_URL }],
  creator: "Magdalena Adamek",
  publisher: "Magdalena Adamek",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: BASE_URL,
    siteName: "Magda Montuje",
    title: "Magda Montuje | Montaż filmów z wakacji",
    description:
      "Profesjonalny montaż filmów z wakacji. Przekształcam Twoje surowe nagrania w emocjonalne, pięknie zmontowane filmy.",
    images: [
      {
        url: "/profile-logo.svg",
        width: 512,
        height: 512,
        alt: "Magda Montuje – logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magda Montuje | Montaż filmów z wakacji",
    description:
      "Profesjonalny montaż filmów z wakacji. Przekształcam Twoje surowe nagrania w emocjonalne, pięknie zmontowane filmy.",
    images: ["/profile-logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Magdalena Adamek",
      alternateName: "Magda Montuje",
      jobTitle: "Montażystka wideo",
      description:
        "Specjalizuję się w montażu filmów z wakacji i podróży. Przekształcam surowe nagrania w profesjonalne, emocjonalne filmy.",
      url: BASE_URL,
      email: "kontakt@magdamontuje.pl",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61585078733579",
        "https://www.youtube.com/@MagdaMontuje1",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#business`,
      name: "Magda Montuje",
      description:
        "Profesjonalny montaż filmów z wakacji i podróży. Korekcja kolorów, muzyka, efekty i storytelling.",
      url: BASE_URL,
      email: "kontakt@magdamontuje.pl",
      founder: { "@id": `${BASE_URL}/#person` },
      knowsAbout: [
        "Montaż wideo",
        "Edycja filmów z wakacji",
        "Korekcja kolorów",
        "Storytelling wideo",
      ],
      offers: {
        "@type": "Offer",
        description: "Montaż filmów z wakacji i podróży",
        url: BASE_URL,
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61585078733579",
        "https://www.youtube.com/@MagdaMontuje1",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
