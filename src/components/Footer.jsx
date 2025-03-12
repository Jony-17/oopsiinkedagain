import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      {/* Section Contactos */}
      <section
        className="bg-[#101010] pb-[70px] px-[15%]"
        id="tattoos"
      ></section>

      {/* Section Footer */}
      <section className="relative bg-[#090909] flex flex-col items-center text-center pb-5">
        <div className="flex flex-col items-center w-full max-w-[1200px] px-6 text-lg md:text-xl gap-9">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/src/assets/logo.png"
              className="max-h-13 max-w-[200px] w-auto md:max-w-[250px]"
            />
          </div>

          {/* Endereço e horário */}
          <div className="flex flex-col items-center gap-3">
            <p
              className="text-[#FFFFFF] flex items-center gap-2"
              style={{ fontFamily: "'Yrsa', serif" }}
            >
              <FontAwesomeIcon
                icon={faMapPin}
                className="mr-2 rotate-[20deg]"
              />
              Rua Almeida Garrett 20, Vila Nova de Gaia
            </p>

            <div
              className="text-[#FFFFFF] flex items-center gap-2"
              style={{ fontFamily: "'Yrsa', serif" }}
            >
              <FontAwesomeIcon icon={faClock} />
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <span className="font-bold">Segunda - Sexta</span>
                  <span>10h - 18h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold">Sábado</span>
                  <span>9h - 13h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links sociais */}
          <div className="flex justify-center gap-6 text-[#FFFFFF] text-2xl">
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
          className="text-xl text-[#969595] font-light italic text-center mt-6"
          style={{ fontFamily: "'Yrsa', serif" }}
        >
          © 2024 Todos os direitos reservados a Oops I Inked Again
        </p>
      </section>
    </div>
  );
}

export default Footer;
