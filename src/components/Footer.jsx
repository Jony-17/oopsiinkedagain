import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      {/* Section Contactos pt-[100px]*/}
      <section
        className="bg-[#101010] pb-[70px] px-[15%] md:px-[15%]"
        id="tattoos"
      ></section>

      {/* Section Footer */}
      <section className="relative bg-[#090909]">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] mx-auto px-6 text-lg md:text-xl gap-4 md:gap-0">
          {/* Endereço e horário */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <p
              className="text-[#FFFFFF] flex items-center gap-2"
              style={{ fontFamily: "'Yrsa', serif" }}
            >
              <FontAwesomeIcon
                icon={faMapPin}
                className="mr-2 rotate-[20deg]"
              />
              Rua do Travessas...
            </p>
            <p
              className="text-[#FFFFFF] flex items-center gap-2"
              style={{ fontFamily: "'Yrsa', serif" }}
            >
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Segunda - Sábado 10h - 19h
            </p>
          </div>

          {/* Logo */}
          <div className="relative transform md:transform md:-translate-x-1/2">
            <img
              src="/src/assets/logo.png"
              className="max-h-13 max-w-[200px] w-auto md:max-w-[250px]"
            />
          </div>

          {/* Links sociais */}
          <div className="flex justify-center gap-4 text-[#FFFFFF] text-2xl">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p
          className="text-xl text-[#969595] font-light italic text-center mt-3"
          style={{ fontFamily: "'Yrsa', serif" }}
        >
          © 2024 Todos os direitos reservados a Oops I Inked Again
        </p>
      </section>
    </div>
  );
}

export default Footer;
