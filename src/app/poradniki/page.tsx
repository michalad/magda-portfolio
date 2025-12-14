import GuideForClients from '@/components/GuideForClients';

export const metadata = {
  title: 'Poradnik nagrywania - Jak nagrywać świetne materiały wideo',
  description: 'Praktyczne wskazówki i dobre praktyki dla amatorów - dowiedz się, jak nagrywać filmy, które będą idealne do montażu wakacyjnego.',
};

export default function PoradnikiPage() {
  return (
    <main className="min-h-screen">
      <GuideForClients />
    </main>
  );
}
