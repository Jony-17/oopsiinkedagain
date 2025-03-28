import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Contactos() {
  const markerLocation = [41.11655143393316, -8.593508874017413];
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
        className="bg-[#101010] pt-[calc(150px+64px)] pb-[70px] px-[5%] sm:px-[10%] md:px-[15%]"
        id="informacoes"
      >
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-[50px] sm:gap-[100px] flex-wrap">
          {/* Mapa */}
          <div className="h-[300px] sm:h-[500px] w-full sm:w-[50%] z-0">
            <MapContainer
              style={{ height: "100%", width: "100%" }}
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
          <div className="flex flex-col items-start w-full sm:w-[40%]">
            <div className="relative w-full">
              <div className="relative flex items-center w-full">
                <span className="absolute left-[-10px] border-t-2 border-[#727171] w-[35vw] -translate-x-full"></span>
                <h1 className="text-xl uppercase text-[#727171] font-bold pr-4">
                  Contactos
                </h1>
                <span
                  className="absolute border-t-2 border-[#727171] w-[34vw] 
  translate-x-[-635px] sm:translate-x-[-300px] left-full"
                ></span>
              </div>

              <h1
                className="text-4xl sm:text-5xl text-[#FFFFFF] font-bold mt-3"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                Onde nos encontrar
              </h1>
            </div>

            <div className="max-w-full sm:max-w-[500px] text-secondary text-[19px] text-justify leading-[2] font-poppins font-normal animate-[fadeIn_3s] mt-[20px]">
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
                  Rua Almeida Garrett 20, Vila Nova de Gaia
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
                <p
                  className="text-lg text-[#FFFFFF] flex items-center gap-2"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="ml-2 mr-2" />
                  oopsiinkedagain@gmail.com
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

      <ScrollTop />
    </>
  );
}

export default Contactos;
