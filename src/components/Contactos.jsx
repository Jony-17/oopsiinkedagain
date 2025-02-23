import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import NavBar from "./Navbar";
import Footer from "./Footer";

function Contactos() {
  const scrollToTop = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollToTop.current.style.display = "block";
      } else {
        scrollToTop.current.style.display = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <div>
        <NavBar
          bgColor="bg-[#101010]"
          shadow="inset 0 -20px 20px rgb(22, 22, 22)"
        />
      </div>
      {/* Section Contactos */}
      <section
        className="bg-[#101010] pt-[250px] pb-[70px] px-[15%]"
        id="informacoes"
      >
        <div className="flex flex-col items-center">
          <div className="flex justify-center flex-wrap gap-[100px]">
            <h1 className="text-7xl text-[#FFFFFF]">MAPA</h1>
            <div className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="relative flex items-center w-full">
                  <h1 className="text-xl uppercase text-[#727171] font-bold pr-4">
                    Contactos
                  </h1>
                  <span className="absolute left-full border-t-2 border-[#727171] w-[40vw] translate-x-[-345px]"></span>
                </div>

                <h1
                  className="text-5xl text-[#FFFFFF] font-bold mt-3"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  Onde nos encontrar
                </h1>
              </div>

              <div className="max-w-[500px] text-secondary text-[19px] text-justify leading-[2] font-poppins font-normal animate-[fadeIn_3s] mt-[20px]">
                <p
                  className="text-xl text-[#969595] font-light italic text-justify mt-3 mb-10"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  Sinta-se à vontade para contactar o nosso estúdio caso tenha
                  alguma questão.
                </p>
              </div>

              <div className="w-full">
                <div className="bg-black mt-4 p-4 transition-all">
                  <p
                    className="text-lg text-[#FFFFFF] flex items-center left-[5px] gap-2"
                    style={{ fontFamily: "'Yrsa', serif" }}
                  >
                    <FontAwesomeIcon
                      icon={faMapPin}
                      className="ml-2 mr-2 rotate-[20deg]"
                    />
                    Rua do Travessas...
                  </p>
                </div>

                <div className="bg-black mt-4 p-4 transition-all">
                  <p
                    className="text-lg text-[#FFFFFF] flex items-center gap-2"
                    style={{ fontFamily: "'Yrsa', serif" }}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="ml-2 mr-2 rotate-[10deg]"
                    />
                    +351 933 333 333
                  </p>
                </div>

                <div className="bg-black mt-4 p-4 transition-all">
                  <p
                    className="text-lg text-[#FFFFFF] flex items-center gap-2"
                    style={{ fontFamily: "'Yrsa', serif" }}
                  >
                    <FontAwesomeIcon icon={faInstagram} className="ml-2 mr-2" />
                    /oopsiinkedagain
                  </p>
                </div>

                <div className="bg-black mt-4 p-4 transition-all">
                  <p
                    className="text-lg text-[#FFFFFF] flex items-center gap-2"
                    style={{ fontFamily: "'Yrsa', serif" }}
                  >
                    <FontAwesomeIcon
                      icon={faClock}
                      className="ml-2 mr-2 rotate-[20deg]"
                    />
                    Segunda - Sábado 10h - 19h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <button
        className="hidden fixed bottom-5 right-5 z-[99] text-[16px] border-none outline-none bg-[#616161] text-white cursor-pointer p-4 rounded-[10px]"
        ref={scrollToTop}
        onClick={scrollTopFunction}
        id="scrollToTopBtn"
        title="Go to top"
      >
        <FontAwesomeIcon icon={faMapPin} />
      </button>
    </>
  );
}

export default Contactos;
