import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Navbar";
import Footer from "./Footer";

const images = [
  "/src/assets/tattoo1.png",
  "/src/assets/tattoo2.png",
  "/src/assets/tattoo3.png",
];

function Home() {
  const [activeIndex, setActiveIndex] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollToTop = useRef(null);

  const listaInformacoes = [
    {
      questao: "Quais são os valores e como posso obter um orçamento?",
      resposta:
        "O valor é por cada tatuagem, não por hora, porque cada tatuagem é única e diferente. O preço depende da complexidade dos desenhos escolhidos. Algumas tatuagens podem ser feitas no mesmo dia, mas projetos maiores e mais elaborados precisarão de várias sessões. Para obter um orçamento aproximado, por favor preencha o formulário na secção 'informações' ou visite o estúdio.",
    },
    {
      questao: "Quanto tempo demora uma tatuagem?",
      resposta:
        "O tempo de execução depende do tamanho, complexidade e localização da tatuagem. Pequenas tatuagens podem ser feitas em minutos, enquanto trabalhos maiores podem levar horas ou várias sessões.",
    },
    {
      questao: "Quais são os cuidados a ter depois da tatuagem?",
      resposta:
        "Após a tatuagem, é essencial manter a área limpa, aplicar pomada cicatrizante e evitar exposição ao sol. Também deve evitar água do mar e piscina nas primeiras semanas.",
    },
  ];

  function activeToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/src/assets/image1.png)" }}
    >
      {/* Navbar fora do fluxo do layout principal */}
      <NavBar />

      {/* Overlay para escurecer a imagem de fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      {/* Conteúdo principal centralizado */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h3 className="text-xl uppercase font-bold">
          Bem-vindos ao meu estúdio
        </h3>
        <h1 className="text-7xl uppercase font-bold mt-3">
          Oops I <span className="text-[#50504F]">Inked</span> Again
        </h1>
        <h2 className="text-5xl uppercase font-bold mt-3">
          Fineline & Body Art
        </h2>
        <button className="mt-12 px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
          Faça a sua marcação
        </button>

        <div className="absolute bottom-4 right-4 flex flex-col space-y-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-12 text-[#BFBFBF] rotate-[270deg] uppercase no-underline hover:text-white transition duration-300"
          >
            INSTAGRAM
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-12 text-[#BFBFBF] rotate-[270deg] uppercase no-underline hover:text-white transition duration-300"
          >
            WHATSAPP
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a
            href="#estudio"
            className="flex flex-col items-center justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {/* <span className="mt-2 text-sm uppercase">Scroll Down</span> */}
          </a>
        </div>
      </div>

      {/* Section Estúdio */}
      <section
        className="bg-[#101010] pt-[100px] pb-[70px] px-[15%]"
        id="estudio"
      >
        <div className="flex gap-20 justify-normal items-center">
          <div className="relative max-w-lg">
            <h2
              className="text-xl uppercase text-[#727171] font-bold"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Estúdio
            </h2>
            <h2
              className="text-5xl text-[#FFFFFF] font-bold mt-3"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Oops I Inked Again
            </h2>
            <p
              className="text-xl text-[#969595] font-light italic text-justify mt-3"
              style={{ fontFamily: "'Yrsa', serif" }}
            >
              Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado em
              2024, somos um estúdio de tatuagem no Porto. Fundado em 2024,
              somos um estúdio de tatuagem no Porto. Fundado em 2024, somos um
              estúdio de tatuagem no Porto.{" "}
              <span className="block mt-4">
                Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado
                em 2024, somos um estúdio de tatuagem no Porto. Fundado em 2024,
                somos um estúdio de tatuagem no Porto. Fundado em 2024, somos um
                estúdio de tatuagem no Porto.
              </span>
            </p>

            {/* <div className="relative w-screen flex items-center justify-between mt-4"> */}
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <span className="block border-t-2 border-white w-screen -translate-x-2/4"></span>
              </div>
              <div className="relative flex items-center justify-end">
                <a
                  className="text-[#FFFFFF] uppercase mx-4"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                  href="/estudio"
                >
                  Leia a nossa história
                </a>
                <svg
                  style={{ rotate: "270deg" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
            </div>
          </div>

          <div className="relative">
            {/* Primeira imagem */}
            <img
              src="/src/assets/image2.png"
              alt="Estúdio"
              className="max-w-full"
            />

            {/* Segunda imagem, posicionada absolutamente sobre a primeira */}
            <img
              src="/src/assets/image3.png"
              alt="Estúdio"
              className="absolute top-64 left-36 max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Section Tattoos */}
      <section
        className="bg-[#101010] pt-[200px] pb-[70px] px-[15%]"
        id="tattoos"
      >
        <div className="w-full">
          <div className="flex justify-between items-end">
            <h2
              className="text-5xl text-[#FFFFFF] font-bold mt-3"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Tattoos
            </h2>
            <a
              className="text-[#727171] uppercase mx-4"
              style={{ fontFamily: "'Source Serif 4', serif" }}
              href="/galeria"
            >
              Mostrar mais
            </a>
          </div>

          <div
            className="grid grid-cols-3 gap-2 mt-8"
            style={{ gridTemplateRows: "auto auto auto" }}
          >
            {/* Primeira linha com as imagens 1 e 2 */}
            <div className="flex justify-center">
              <img
                src="/src/assets/tattoo1.png"
                alt="Imagem 1"
                className="w-full h-[230px] object-cover mx-auto rounded-tl-3xl	"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/src/assets/tattoo2.png"
                alt="Imagem 2"
                className="w-full h-[230px] object-cover mx-auto"
              />
            </div>

            {/* Terceira linha com a imagem 5 ocupando as linhas 2 e 4 */}
            <div className="flex justify-center col-span-1 row-span-3">
              <img
                src="/src/assets/tattoo5.png"
                alt="Imagem 5"
                className="w-full h-[468px] object-cover mx-auto rounded-tr-3xl rounded-br-3xl"
              />
            </div>

            {/* Segunda linha com as imagens 3 e 4 */}
            <div className="flex justify-center">
              <img
                src="/src/assets/tattoo3.png"
                alt="Imagem 3"
                className="w-full h-[230px] object-cover mx-auto rounded-bl-3xl"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/src/assets/tattoo4.png"
                alt="Imagem 4"
                className="w-full h-[230px] object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
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

      {/* Section Informações */}
      <section
        className="bg-[#101010] pt-[100px] pb-[70px] px-[15%]"
        id="tattoos"
      >
        <div className="w-full">
          <div className="flex justify-between items-end">
            <h2
              className="text-5xl text-[#FFFFFF] font-bold mt-3"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Informações
            </h2>
          </div>
          {listaInformacoes.map((item, index) => (
            <div
              key={index}
              className={`bg-[#090909] mt-8 rounded-lg p-[1.5rem] transition-all overflow-hidden ${
                activeIndex === index ? "max-h-[600px]" : "max-h-17"
              }`}
            >
              <div
                className="w-full flex items-center justify-between cursor-pointer transition duration-300"
                role="button"
                onClick={() => activeToggle(index)}
              >
                <h2
                  className="text-white text-xl"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {item.questao}
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-500 ${
                    activeIndex === index ? "rotate-180" : ""
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
              <div
                className={`transition-all ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 max-h-[600px] mt-4 duration-600"
                    : "opacity-0 max-h-0 duration-600"
                }`}
              >
                <p className="text-white text-base text-justify">
                  {item.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <button className="mt-12 px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
            Mostrar mais
          </button>
        </div>
      </section>

      {/* Section Contactos */}
      <section className="bg-[#101010] pt-[100px] pb-[70px]" id="tattoos">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Imagem da galeria */}
          <div className="relative w-full md:w-[60vh] h-[40vh] md:h-[50vh] bg-[#090909] bg-center mx-auto md:ml-[70px] overflow-hidden">
            <div className="relative w-full h-full">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0"
                  }`}
                  alt={`Tattoo ${index + 1}`}
                />
              ))}
            </div>
            {/* Indicadores */}
            <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
            {/* Botão anterior */}
            <button
              onClick={prevSlide}
              className="absolute text-white top-1/2 left-4 z-30 transform -translate-y-1/2 px-4 py-2 bg-neutral-600 rounded-full"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {/* Botão próximo */}
            <button
              onClick={nextSlide}
              className="absolute text-white top-1/2 right-4 z-30 transform -translate-y-1/2 px-4 py-2 bg-neutral-600 rounded-full"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* Texto e botão de contato w-[90%] */}
          <div className="relative w-full md:w-[85vh] h-auto md:h-[60vh] bg-[#090909] bg-center">
            {/* Secção do texto h-[200px]*/}
            <div className="relative z-10 flex flex-col justify-center items-start h-2/3 text-white px-6 md:px-[50px]">
              <h2
                className="text-2xl md:text-4xl text-[#FFFFFF] font-bold"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                Entre em contacto
              </h2>
              <p
                className="text-base md:text-xl text-[#969595] font-light italic text-justify mt-3"
                style={{ fontFamily: "'Yrsa', serif" }}
              >
                Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado
                em 2024, somos um estúdio de tatuagem no Porto. Fundado em 2024,
                somos um estúdio de tatuagem no Porto. Fundado em 2024, somos um
                estúdio de tatuagem no Porto.
              </p>
            </div>

            {/* Secção com imagem de fundo e botão */}
            <div
              className="relative h-1/3 bg-cover bg-center"
              style={{
                backgroundImage: "url('/src/assets/background1.png')",
                boxShadow: "inset 0 10px 10px rgba(9, 9, 9, 100%)",
              }}
            >
              <button className="mt-6 ml-[50px] mr-[50px] px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
                Contacte-nos
              </button>
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
    </div>
  );
}

export default Home;
