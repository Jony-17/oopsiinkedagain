import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Navbar";
import NavBar2 from "./Navbar2";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
// import Loader from "./Loader";

const images = [
  "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960078/tattoo1_zstdtm.jpg",
  "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo3_mesizk.jpg",
  "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo5_jrxh01.jpg",
];

function Home() {
  const [activeIndex, setActiveIndex] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const listaInformacoes = [
    {
      questao: "Quais os métodos de pagamento aceites?",
      resposta: "Numerário, transferência bancária, MbWay ou multibanco.",
    },
    {
      questao: "Quanto custa uma tatuagem?",
      resposta:
        "O valor depende do tamanho, local do corpo, estilo e complexidade do desenho. Os orçamentos são personalizados mas o mínimo são 35€.",
    },
    {
      questao: "Com que antecedência devo agendar?",
      resposta:
        "Depende da agenda de cada tatuador mas recomendamos no mínimo 3 dias úteis.",
    },
  ];

  function activeToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
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

  const backgroundTop = useRef(null);
  const [bgColor, setBgColor] = useState("bg-transparent"); // Começa transparente

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor(
          "bg-[#090909] lg:bg-transparent shadow-lg transition-all duration-300"
        );
      } else {
        setBgColor("bg-transparent transition-all duration-300");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960409/foto_t2l7ug.jpg)",
      }}
    >
      {/* Navbar fora do fluxo do layout principal */}
      <NavBar
        // bgColor="bg-[#090909] lg:bg-transparent"
        bgColor={bgColor}
        ref={backgroundTop}
        shadow="sm:inset 0 -20px 20px rgb(22, 22, 22) lg:inset 0"
      />

      {/* Overlay para escurecer a imagem de fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.2]"></div>
      {/* Conteúdo principal centralizado */}
      <div className="relative z-10 flex flex-col justify-end items-start h-full text-left text-white px-6 sm:pl-[10rem] sm:pr-[4rem] pb-[5.5rem] sm:pb-20">
        <h1
          className="text-6xl sm:text-7xl md:text-[50px] lg:text-[70px] xl:text-[80px] 2xl:text-[110px] uppercase font-bold leading-tight lg:leading-[70px] xl:leading-[80px] 2xl:leading-[110px]"
          style={{ fontFamily: "'Anton', sans-serif", fontWeight: 500 }}
        >
          Oops!
          <br />
          <span className="w-full inline-block">I Inked</span>{" "}
          <span className="block sm:inline">Again</span>
        </h1>
        {/* <h3 className="text-lg sm:text-xl uppercase font-bold">
          Bem-vindos ao meu estúdio
        </h3>
        <h1 className="text-4xl sm:text-7xl uppercase font-bold mt-3">
          Oops I <span className="text-[#50504F]">Inked</span> Again
        </h1>
        <h2 className="text-5xl sm:text-7xl uppercase font-bold mt-3">
          Fineline & Body Art
        </h2> */}
        <a
          href="/orçamento"
          className="mt-12 px-6 py-3 border-2 font-semibold border-white bg-white text-[#444444] hover:bg-transparent hover:text-[#fff] uppercase transition duration-700 text-[12px]"
        >
          Pede o teu orçamento
        </a>

        <div className="absolute bottom-4 right-[0.3rem] sm:right-4 hidden sm:flex flex-col space-y-4 text-[14px]">
          <a
            href="https://www.instagram.com/oopsiinkedagain/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-12 text-[#BFBFBF] rotate-[270deg] uppercase no-underline hover:text-white transition duration-300"
          >
            INSTAGRAM
          </a>
          <a
            href="https://wa.me/351962112592?text=Olá%2C%20quero%20agendar%20uma%20tatuagem!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-12 text-[#BFBFBF] rotate-[270deg] uppercase no-underline hover:text-white transition duration-300"
          >
            WHATSAPP
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden sm:flex transform -translate-x-1/2">
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
        className="bg-[#101010] pt-[150px] pb-[170px] px-[5%] sm:px-[10%] md:px-[15%]"
        id="estudio"
      >
        <div className="flex flex-col md:flex-row gap-10 md:gap-[10rem] justify-normal items-center">
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
              Oops! I Inked Again
            </h2>
            <p
              className="text-xl text-[#969595] font-light italic text-justify mt-3"
              style={{ fontFamily: "'Yrsa', serif" }}
            >
              Nasce da paixão, da coragem e da crença de que cada traço tem um
              poder imenso: o de eternizar momentos, dores, amores, sonhos e
              conquistas. Ergue-se um espaço para os que têm histórias para
              contar e coragem para as marcar na própria pele. Para os que olham
              para o corpo como uma tela viva, e para a vida como a maior de
              todas as artes.{" "}
              <span className="block mt-4">
                Aqui marca-se a história e, sobretudo, coleciona-se a arte!
              </span>
            </p>

            {/* <div className="relative w-screen flex items-center justify-between mt-4"> */}
            <div className="relative mt-6">
              {/* <div className="absolute inset-0 flex items-center">
                <span className="block border-t-2 border-white w-screen -translate-x-2/4 hidden sm:block"></span>
              </div> */}
              <div className="relative flex items-center">
                {/* justify-end */}
                {/* mx-4 */}
                <a
                  className="text-[#FFFFFF] uppercase"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                  href="/estudio"
                >
                  A nossa história
                </a>
                <svg
                  style={{ rotate: "270deg", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                  onClick={() => (window.location.href = "/estudio")}
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
              src="https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio1_aqc8lf.jpg"
              alt="Estúdio"
              loading="lazy"
              className="max-w-[70%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[23rem] 2xl:max-w-[26rem]"
            />

            {/* Segunda imagem, posicionada absolutamente sobre a primeira */}
            <img
              src="https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio2_e8w7ze.jpg"
              alt="Estúdio"
              loading="lazy"
              className="absolute top-[15rem] left-[6rem] xl:left-[7rem] 2xl:left-[10rem] max-w-[70%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[23rem] 2xl:max-w-[26rem] 2xl:top-[19rem]"
              // className="max-w-full mt-4 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[60%]"
            />
          </div>
        </div>
      </section>

      {/* Section Tattoos */}
      <section
        className="bg-[#101010] pt-[200px] pb-[70px] px-[5%] sm:px-[10%] md:px-[15%]"
        id="tattoos"
      >
        <div className="w-full">
          <div className="flex justify-between items-end">
            <h2
              className="text-4xl sm:text-5xl text-[#FFFFFF] font-bold mt-3"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Tattoos
            </h2>
            <a
              className="hidden text-[#727171] uppercase mx-4 text-sm"
              style={{ fontFamily: "'Source Serif 4', serif" }}
              href="/galeria"
            >
              Mostrar mais
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8">
            {/* Primeira linha com as imagens 1 e 2 */}
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960078/tattoo1_zstdtm.jpg"
                alt="Imagem 1"
                loading="lazy"
                className="w-full h-[330px] object-cover md:rounded-tl-3xl cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960078/tattoo1_zstdtm.jpg"
                  )
                }
              />
              {/*w-full h-[330px] object-scale-down object-center cursor-pointer*/}
            </div>
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960078/tattoo2_peobqh.jpg"
                alt="Imagem 2"
                loading="lazy"
                className="w-full h-[330px] object-cover cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960078/tattoo2_peobqh.jpg"
                  )
                }
              />
            </div>

            {/* Terceira linha com a imagem 5 ocupando as linhas 2 e 4 */}
            <div className="flex justify-center md:col-span-1 md:row-span-3">
              <img
                src="https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo4_dfkqfm.jpg"
                alt="Imagem 5"
                loading="lazy"
                className="w-full h-[330px] md:h-[668px] object-cover md:rounded-tr-3xl md:rounded-br-3xl cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo4_dfkqfm.jpg"
                  )
                }
              />
            </div>

            {/* Segunda linha com as imagens 3 e 4 */}
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo3_mesizk.jpg"
                alt="Imagem 3"
                loading="lazy"
                className="w-full h-[330px] object-cover md:rounded-bl-3xl cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo3_mesizk.jpg"
                  )
                }
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo6_sjxeu6.jpg"
                alt="Imagem 4"
                loading="lazy"
                className="w-full h-[330px] object-cover cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo6_sjxeu6.jpg"
                  )
                }
              />
            </div>
          </div>

          {/* Modal para exibir a imagem selecionada */}
          {selectedImage && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-[500px] mx-auto">
                <button
                  className="absolute top-2 right-2 text-white text-2xl font-bold"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section */}
      <section className="bg-[#101010] pt-[120px] pb-[70px]" id="tattoos">
        <div
          className="relative h-[40vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dr9j4bjys/image/upload/v1745961653/foto2_u9q6q1.jpg)",
          }}
        >
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl uppercase font-bold w-full text-center"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Entra em contacto e obtém o teu orçamento
          </h2>
        </div>
      </section>

      {/* Section Informações */}
      <section
        className="bg-[#101010] pt-[100px] pb-[70px] px-[5%] sm:px-[10%] md:px-[15%]"
        id="tattoos"
      >
        <div className="w-full">
          <div className="flex justify-between items-end">
            <h2
              className="text-4xl sm:text-5xl text-[#FFFFFF] font-bold mt-3"
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
                <p className="text-white sm:text-base text-sm text-justify">
                  {item.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <a
            href="/informações"
            className="mt-12 px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition duration-700"
          >
            Mostrar mais
          </a>
        </div>
      </section>

      {/* Section Contactos */}
      <section
        className="bg-[#101010] pt-[150px] pb-[70px] px-[5%] md:px-0"
        id="tattoos"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 mb-[50px]">
          {/* Imagem da galeria */}
          <div className="relative w-full md:w-[60vh] h-[40vh] md:h-[50vh] bg-[#090909] bg-center mx-auto md:ml-[150px] overflow-hidden">
            <div className="relative w-full h-full">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`absolute inset-0 rounded-lg w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0"
                  }`}
                  alt={`Tattoo ${index + 1}`}
                  loading="lazy"
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

          {/* Texto e botão de contacto w-[90%] */}
          <div className="relative w-full rounded-lg md:w-[60vh] h-auto md:h-[80%] bg-[#090909] bg-center">
            {/* Secção do texto h-[200px]*/}
            <div className="relative z-10 h-[80%] text-white my-8 px-6 md:px-[50px]">
              <h2
                className="text-2xl md:text-4xl text-[#FFFFFF] font-bold"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                Entra em contacto
              </h2>
              <p
                className="text-lg md:text-xl text-[#969595] font-light italic text-justify mt-3"
                style={{ fontFamily: "'Yrsa', serif" }}
              >
                Sente-te à vontade para nos contactar — estamos aqui para tirar
                dúvidas, partilhar ideias e ajudar a dar vida à tua próxima
                tatuagem!
              </p>
            </div>

            {/* Secção com imagem de fundo e botão */}
            <div
              className="relative h-[45%] bg-cover bg-center flex items-baseline justify-between p-6 md:px-[50px]"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dr9j4bjys/image/upload/v1745961653/foto2_u9q6q1.jpg')",
                boxShadow: "inset 0 10px 10px rgba(9, 9, 9, 100%)",
              }}
            >
              <a
                href="/contactos"
                className="text-[13px] sm:text-base px-6 py-5 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition duration-700"
              >
                Contacta-nos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ScrollTop />

      {/* <Loader /> */}
    </div>
  );
}

export default Home;
