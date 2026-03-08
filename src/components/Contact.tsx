import { socialMedia } from "@/data/socialMedia";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Kontakt
        </h2>
        <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto">
          Masz film z wakacji do zmontowania? Napisz do mnie!
        </p>
        <p className="text-center text-gray-900 font-semibold mb-8">
          Magdalena Adamek
        </p>

        <div className="max-w-lg mx-auto bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg mb-12">
          {socialMedia.map((item, index) => (
            <div
              key={item.name}
              className={`flex items-start space-x-4 ${
                index < socialMedia.length - 1 ? "mb-6" : ""
              }`}
            >
              <div
                className={`w-12 h-12 ${item.colorClass} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <a
                  href={item.href}
                  {...(item.name !== "Email"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`${item.colorClass.replace("bg-", "text-")} hover:opacity-80`}
                >
                  {item.displayText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
