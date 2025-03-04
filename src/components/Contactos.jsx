import { useEffect, useRef } from "react";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhone,
  faClock,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
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

  const markerLocation = [41.117898438010876, -8.589363463863062];
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
        <div className="flex flex-row justify-center items-center gap-[100px] flex-wrap">
          {/* Mapa */}
          <div className="h-[500px] w-[50%] min-w-[400px]">
            <MapContainer
              style={{ height: "500px", width: "100%" }}
              center={markerLocation}
              zoom={15}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={markerLocation}></Marker>
            </MapContainer>
          </div>

          {/* Informações de contacto */}
          <div className="flex flex-col items-start w-[40%] min-w-[350px]">
            <div className="relative w-full">
              <div className="relative flex items-center w-full">
                <h1 className="text-xl uppercase text-[#727171] font-bold pr-4">
                  Contactos
                </h1>
                <span className="absolute left-full border-t-2 border-[#727171] w-[37vw] translate-x-[-410px]"></span>
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

            {/* Detalhes de contato */}
            <div className="w-full">
              <div className="bg-[#090909] mt-4 p-4 transition-all">
                <p
                  className="text-lg text-[#FFFFFF] flex items-center gap-2"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="ml-2 mr-2 rotate-[20deg]"
                  />
                  Rua do Travessas...
                </p>
              </div>

              <div className="bg-[#090909] mt-4 p-4 transition-all">
                <p
                  className="text-lg text-[#FFFFFF] flex items-center gap-2"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="ml-2 mr-2 rotate-[10deg] text-sm"
                  />
                  +351 933 333 333
                </p>
              </div>

              <div className="bg-[#090909] mt-4 p-4 transition-all">
                <p
                  className="text-lg text-[#FFFFFF] flex items-center gap-2"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  <FontAwesomeIcon icon={faInstagram} className="ml-2 mr-2" />
                  /oopsiinkedagain
                </p>
              </div>

              <div className="bg-[#090909] mt-4 p-4 transition-all">
                <div
                  className="text-lg text-[#FFFFFF] flex items-center gap-2"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  <FontAwesomeIcon
                    icon={faClock}
                    className="ml-2 mr-2 rotate-[20deg]"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-start">
                      <span className="font-bold">Segunda - Sexta</span>
                      <span>10h - 18h</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-bold">Sábado</span>
                      <span>9h - 13h</span>
                    </div>
                  </div>
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
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </>
  );
}

export default Contactos;
