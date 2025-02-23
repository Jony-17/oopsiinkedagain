import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./Navbar";
import Footer from "./Footer";

function Informacoes() {
  const [activeIndex, setActiveIndex] = useState([]);

  const scrollToTop = useRef(null);

  function activeToggle(index) {
    setActiveIndex(activeIndex === "active" ? null : index);
  }

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
      {/* Section Informações */}
      <section
        className="bg-[#101010] pt-[250px] pb-[70px] px-[15%]"
        id="informacoes"
      >
        {/* <div className="relative"> */}
        <div className="relative flex items-center">
          <span className="absolute left-[-10px] border-t-2 border-[#727171] w-[35vw] -translate-x-full"></span>
          <h2
            className="text-xl uppercase text-[#727171] font-bold"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Informações
          </h2>
        </div>
        <h2
          className="text-5xl text-[#FFFFFF] font-bold mt-3"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Perguntas Frequentes
        </h2>

        <div className="w-full">
          <div
            className={`bg-black mt-8 rounded-lg p-4 hover:bg-gray-800 transition-all overflow-hidden ${
              activeIndex === 0 ? "max-h-[600px]" : "max-h-16"
            }`}
          >
            <div
              className="w-full flex items-center justify-between cursor-pointer transition duration-300"
              role="button"
              onClick={() => activeToggle(activeIndex === 0 ? null : 0)}
            >
              <h2 className="text-white text-2xl">
                Quais são os valores e como posso obter um orçamento?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  activeIndex === 0 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === 0 && (
              <div className="overflow-hidden">
                <p className="pt-[20px] text-white text-base text-justify transition-opacity duration-300">
                  O valor é por cada tatuagem, não por hora, porque cada
                  tatuagem é única e diferente. O preço depende da complexidade
                  dos desenhos escolhidos. Algumas tatuagens podem ser feitas no
                  mesmo dia mas projectos maiores e mais elaborados precisarão
                  de várias sessões. Para obter um orçamento aproximado, por
                  favor preencha o formulário na secção “informações” ou visite
                  o estúdio.
                </p>
              </div>
            )}
          </div>

          <div
            className={`bg-black mt-8 rounded-lg p-4 hover:bg-gray-800 transition-all overflow-hidden ${
              activeIndex === 0 ? "max-h-[600px]" : "max-h-16"
            }`}
          >
            <div
              className="w-full flex items-center justify-between cursor-pointer transition duration-300"
              role="button"
              onClick={() => activeToggle(activeIndex === 0 ? null : 0)}
            >
              <h2 className="text-white text-2xl">
                Quais são os valores e como posso obter um orçamento?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  activeIndex === 0 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === 0 && (
              <div className="overflow-hidden">
                <p className="pt-[20px] text-white text-base text-justify transition-opacity duration-300">
                  O valor é por cada tatuagem, não por hora, porque cada
                  tatuagem é única e diferente. O preço depende da complexidade
                  dos desenhos escolhidos. Algumas tatuagens podem ser feitas no
                  mesmo dia mas projectos maiores e mais elaborados precisarão
                  de várias sessões. Para obter um orçamento aproximado, por
                  favor preencha o formulário na secção “informações” ou visite
                  o estúdio.
                </p>
              </div>
            )}
          </div>

          <div
            className={`bg-black mt-8 rounded-lg p-4 hover:bg-gray-800 transition-all overflow-hidden ${
              activeIndex === 0 ? "max-h-[600px]" : "max-h-16"
            }`}
          >
            <div
              className="w-full flex items-center justify-between cursor-pointer transition duration-300"
              role="button"
              onClick={() => activeToggle(activeIndex === 0 ? null : 0)}
            >
              <h2 className="text-white text-2xl">
                Quais são os valores e como posso obter um orçamento?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  activeIndex === 0 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === 0 && (
              <div className="overflow-hidden">
                <p className="pt-[20px] text-white text-base text-justify transition-opacity duration-300">
                  O valor é por cada tatuagem, não por hora, porque cada
                  tatuagem é única e diferente. O preço depende da complexidade
                  dos desenhos escolhidos. Algumas tatuagens podem ser feitas no
                  mesmo dia mas projectos maiores e mais elaborados precisarão
                  de várias sessões. Para obter um orçamento aproximado, por
                  favor preencha o formulário na secção “informações” ou visite
                  o estúdio.
                </p>
              </div>
            )}
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
            <button className="mt-12 px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
              Mostrar mais
            </button>
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

export default Informacoes;
