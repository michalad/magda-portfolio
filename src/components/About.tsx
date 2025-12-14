import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/magda-portfolio' : '';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          O mnie
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Cześć! Nazywam się Magdalena Adamek i specjalizuję się w montażu filmów z wakacji.
              Każda podróż to wyjątkowa historia, a ja pomagam ją opowiedzieć w
              sposób, który zachwyci na lata.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Od egzotycznych plaż po górskie wyprawy - przekształcam surowe
              nagrania w profesjonalne, emocjonalne filmy, które przeniosą Cię
              z powrotem do najpiękniejszych chwil.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Montaż wideo
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Korekcja kolorów
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Muzyka i efekty
              </span>
              <span className="px-4 py-2 bg-amber-200 text-amber-900 rounded-full text-sm font-medium">
                Storytelling
              </span>
            </div>
          </div>
          <div className="relative h-96 flex items-center justify-center">
            <Image 
              src={`${basePath}/profile-logo.svg`} 
              alt="Magdalena montuje - logo" 
              width={320}
              height={320}
              className="w-80 h-80 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
