import type { Metadata } from 'next';
import GuideForClients from '@/components/GuideForClients';

export const metadata: Metadata = {
  title: 'Poradnik nagrywania – jak nagrywać świetne materiały wideo',
  description: 'Praktyczne wskazówki i dobre praktyki dla amatorów – dowiedz się, jak nagrywać filmy z wakacji, które będą idealne do profesjonalnego montażu.',
  keywords: [
    'jak nagrywać filmy z wakacji',
    'poradnik nagrywania wideo',
    'dobre praktyki nagrywanie',
    'montaż wakacyjny wskazówki',
  ],
  alternates: {
    canonical: '/poradniki',
  },
  openGraph: {
    type: 'article',
    url: 'https://magdamontuje.pl/poradniki',
    title: 'Poradnik nagrywania – jak nagrywać świetne materiały wideo',
    description: 'Praktyczne wskazówki i dobre praktyki dla amatorów – dowiedz się, jak nagrywać filmy z wakacji, które będą idealne do profesjonalnego montażu.',
    images: [
      {
        url: '/profile-logo.svg',
        width: 512,
        height: 512,
        alt: 'Magda Montuje – poradnik nagrywania',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poradnik nagrywania – jak nagrywać świetne materiały wideo',
    description: 'Praktyczne wskazówki i dobre praktyki dla amatorów – dowiedz się, jak nagrywać filmy z wakacji.',
    images: ['/profile-logo.svg'],
  },
};

export default function PoradnikiPage() {
  return (
    <main className="min-h-screen">
      <GuideForClients />
    </main>
  );
}
