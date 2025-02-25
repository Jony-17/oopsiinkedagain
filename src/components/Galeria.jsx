import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./Navbar";
import Footer from "./Footer";

function Galeria() {
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
      {/* Section Galeria */}
      <section
        className="bg-[#101010] pt-[250px] pb-[70px] px-[15%]"
        id="estudio"
      >
        <div className="relative flex flex-col items-center">
          <h2
            className="text-xl uppercase text-[#727171] font-bold"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Galeria
          </h2>
          <h1
            className="text-5xl text-[#FFFFFF] font-bold mt-3"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            O meu trabalho
          </h1>

          <div className="flex gap-[30px]">
            <button className="mt-12 mb-10 px-6 py-3 border border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
              Todas
            </button>
            <button className="mt-12 mb-10 px-6 py-3 border border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
              Estúdio
            </button>
            <button className="mt-12 mb-10 px-6 py-3 border border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
              Tattoos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-8">
          {/* Imagem 1*/}
          <div className="flex justify-center">
            <img
              src="/src/assets/image1.png"
              alt="Imagem 1"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 2*/}
          <div className="flex justify-center">
            <img
              src="/src/assets/image2.png"
              alt="Imagem 2"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 3*/}
          <div className="flex justify-center">
            <img
              src="/src/assets/image3.png"
              alt="Imagem 3"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 4*/}
          <div className="flex justify-center">
            <img
              src="/src/assets/image3.png"
              alt="Imagem 4"
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="/src/assets/image1.png"
              alt="Imagem 4"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/src/assets/image2.png"
              alt="Imagem 4"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <button className="mt-12 px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
            Mostrar mais
          </button>
        </div>
      </section>

      {/* Section Entre em contacto*/}
      <section className="bg-[#101010] pt-[150px] pb-[70px]" id="tattoos">
        <div
          className="relative h-[30vh] bg-cover bg-center"
          style={{ backgroundImage: "url(/src/assets/background1.png)" }}
        >
          {/* Adicionando centralização com flexbox */}
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl uppercase font-bold"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Entre em contacto e obtenha o seu orçamento
          </h2>
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

export default Galeria;
