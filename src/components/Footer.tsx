import Image from "next/image";
import { socialMediaLinks } from "@/data/socialMedia";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4 inline-block bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <Image src="/profile-logo-wordmark.svg" alt="Magdalena montuje" width={160} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-gray-400">
              Profesjonalny montaż filmów z wakacji. Twoje wspomnienia w
              najlepszym wydaniu.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Start
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  O mnie
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              {socialMediaLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${item.hoverColorClass} transition-colors`}
                >
                  <span className="[&_svg]:w-5 [&_svg]:h-5">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Magdalena montuje. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
