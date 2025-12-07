export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Magdalena montuje
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light">
          Montaż filmów z wakacji
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Tworzę wyjątkowe filmy z Twoich najpiękniejszych wspomnień
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-all hover:scale-105"
        >
          Zobacz Portfolio
        </a>
      </div>
    </section>
  );
}
