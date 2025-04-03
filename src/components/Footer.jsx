import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      {/* Section Contactos */}
      <section
        className="bg-[#101010] pb-[70px] px-[15%]"
        id="tattoos"
      ></section>

      {/* Section Footer */}
      <section className="relative bg-[#090909] text-white py-10">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-start justify-between">
          {/* Coluna 1 - Morada e Contactos */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[5rem]">
            {/* Morada */}
            <div className="text-left">
              <h3
                className="text-[2.35rem] font-bold uppercase"
                style={{ fontFamily: "'Anton', sans-serif", fontWeight: 500 }}
              >
                Morada
              </h3>
              <p className="mt-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faMapPin} className="rotate-[20deg]" />
                Rua Almeida Garrett 20
                <br />
                4430-300 Vila Nova de Gaia
              </p>
            </div>

            {/* Contactos */}
            <div className="text-left">
              <h3
                className="text-[2.35rem] font-bold uppercase"
                style={{ fontFamily: "'Anton', sans-serif", fontWeight: 500 }}
              >
                Contactos
              </h3>
              <p className="mt-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} /> +351 933 333 333
              </p>
              <p className="mt-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faInstagram} />
                /oopsiinkedagain
              </p>
              <p className="mt-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                opsiinkedagain@gmail.com
              </p>
            </div>
          </div>

          {/* Coluna 2 - Logo */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/assets/logo.png"
              className="max-h-[8rem] md:max-h-[9rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
