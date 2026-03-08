"use client";

import { Camera, Sun, Mic, Smartphone, Video, CheckCircle } from 'lucide-react';

export default function GuideForClients() {
  const tips = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: "Trzymaj telefon poziomo",
      description: "Zawsze nagrywaj w orientacji poziomej (landscape). Pionowe filmy wyglądają nieprofesjonalnie i trudniej je montować.",
      category: "Podstawy"
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-500" />,
      title: "Stabilny obraz",
      description: "Trzymaj telefon/kamerę stabilnie obiema rękami. Oprzyj się o coś stabilnego lub użyj statywu. Unikaj szybkich ruchów i trzęsienia kamery.",
      category: "Podstawy"
    },
    {
      icon: <Video className="w-8 h-8 text-green-500" />,
      title: "Nagrywaj w najwyższej jakości",
      description: "Ustaw rozdzielczość minimum 1080p (Full HD), a najlepiej 4K. Wybierz 30 lub 60 klatek na sekundę dla płynnego obrazu.",
      category: "Ustawienia techniczne"
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Światło to podstawa",
      description: "Nagrywaj przy dobrym, naturalnym oświetleniu. Unikaj nagrywania pod słońce - światło powinno padać NA to, co nagrywasz, nie z tyłu.",
      category: "Oświetlenie"
    },
    {
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      title: "Złota godzina",
      description: "Najpiękniejsze ujęcia otrzymasz godzinę po wschodzie lub przed zachodem słońca. Światło jest wtedy miękkie i ciepłe.",
      category: "Oświetlenie"
    },
    {
      icon: <Mic className="w-8 h-8 text-red-500" />,
      title: "Uważaj na dźwięk",
      description: "Nagrywaj w miejscach bez nadmiernego szumu (wiatr, tłumy). Jeśli coś mówisz, bądź blisko mikrofonu. Możesz użyć zewnętrznego mikrofonu do telefonu.",
      category: "Dźwięk"
    },
    {
      icon: <Camera className="w-8 h-8 text-indigo-500" />,
      title: "Kompozycja kadru",
      description: "Użyj zasady trójpodziału - umieszczaj główny obiekt w jednym z punktów przecięcia linii siatki. Zostaw 'oddech' w kadrze - nie filmuj za blisko.",
      category: "Kompozycja"
    },
    {
      icon: <Video className="w-8 h-8 text-teal-500" />,
      title: "Różnorodność ujęć",
      description: "Nagrywaj z różnych perspektyw: szerokie plany (otoczenie), średnie (całe osoby/obiekty) i zbliżenia (detale). To ułatwi montaż.",
      category: "Kompozycja"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
      title: "Dłuższe ujęcia",
      description: "Każde ujęcie nagrywaj przez minimum 10-15 sekund. Lepiej nagrać za dużo niż za mało - w montażu można skrócić, ale nie wydłużyć.",
      category: "Montaż"
    },
    {
      icon: <Camera className="w-8 h-8 text-pink-500" />,
      title: "Czysta soczewka",
      description: "Przed nagrywaniem wytrzyj obiektyw telefonu/kamery. Odciski palców i kurz psują jakość obrazu.",
      category: "Podstawy"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: "Wystarczająco dużo pamięci",
      description: "Upewnij się, że masz wystarczająco miejsca na karcie/telefonie. Sprawdź poziom baterii przed ważnymi ujęciami.",
      category: "Ustawienia techniczne"
    },
    {
      icon: <Video className="w-8 h-8 text-violet-500" />,
      title: "Akcja przez cały czas",
      description: "Rozpocznij nagrywanie 2-3 sekundy PRZED akcją i kontynuuj 2-3 sekundy PO akcji. To da więcej opcji w montażu.",
      category: "Montaż"
    }
  ];

  const categories = ["Wszystkie", "Podstawy", "Ustawienia techniczne", "Oświetlenie", "Dźwięk", "Kompozycja", "Montaż"];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Jak nagrywać świetne materiały?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prosty poradnik dla amatorów - praktyczne wskazówki, które pomogą Ci stworzyć materiały idealne do montażu
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-xl font-semibold text-amber-900 mb-2">💡 Nie musisz być profesjonalistą!</h2>
          <p className="text-amber-800">
            Te wskazówki pomogą Ci nagrywać materiały, z których powstanie piękny film z wakacji. 
            Nie potrzebujesz drogiego sprzętu - wystarczy smartfon i kilka dobrych praktyk!
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {tip.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {tip.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Checklist */}
        <div className="bg-gradient-to-r from-amber-700 to-orange-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">✅ Szybka lista kontrolna przed nagrywaniem</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Telefon/kamera w orientacji poziomej</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Czysty obiektyw</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Wystarczająco miejsca na karcie/telefonie</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Naładowana bateria</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Ustawienia jakości: 1080p lub 4K</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Dobre oświetlenie (światło z przodu)</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Masz pytania o nagrywanie materiałów? Skontaktuj się ze mną!
          </p>
          <a 
            href="/#contact"
            className="inline-block bg-gradient-to-r from-amber-700 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            Skontaktuj się
          </a>
        </div>
      </div>
    </section>
  );
}
