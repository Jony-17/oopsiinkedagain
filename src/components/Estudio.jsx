import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Galeria from "./Galeria";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Estudio() {
  const [selectedImage, setSelectedImage] = useState(null);

  function slugify(title) {
    return title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  }

  const cardsData = [
    {
      id: 1,
      name: "Marília",
      role: "Tattoo Artist",
      image:
        "https://res.cloudinary.com/dr9j4bjys/image/upload/v1746048663/marilia_qd36bd.jpg",
      description:
        "Apaixonada por detalhes e micro tatuagens - e com um amor eterno pela magia da Disney.",
      hoverImage: "/assets/image1.png",
      instagram: "https://www.instagram.com/marilialoureiroj5/",
    },
    // {
    //   id: 2,
    //   name: "Ana",
    //   role: "Bodypiercer",
    //   image:
    //     "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745961203/marilia_qd36bd.jpg",
    //   description:
    //     "Tatuadora desde 2022, especialista em linhas finas e blackwork/dotwork.",
    //   hoverImage: "/assets/image1.png",
    //   instagram: "https://www.instagram.com",
    //   whatsapp: "https://www.whatsapp.com",
    // },
    // {
    //   id: 3,
    //   name: "Carlos",
    //   role: "Fotógrafo",
    //   image:
    //     "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745961203/marilia_qd36bd.jpg",
    //   description:
    //     "Tatuadora desde 2022, especialista em linhas finas e blackwork/dotwork. Apaixonada em transformar sonhos em artes eternas na pele.",
    //   hoverImage: "/assets/image1.png",
    //   instagram: "https://www.instagram.com",
    //   whatsapp: "https://www.whatsapp.com",
    // },
  ];

  const [imageSrc, setImageSrc] = useState({});

  return (
    <>
      <div>
        <NavBar
          bgColor="bg-[#101010]"
          shadow="inset 0 -20px 20px rgb(22, 22, 22)"
        />
      </div>
      {/* Section Estúdio */}
      <section
        className="bg-[#101010] pt-[calc(150px+64px)] pb-[70px] px-[5%] sm:px-[10%] lg:px-[15%]"
        id="estudio"
      >
        {/* <div className="relative"> */}
        <div className="relative flex items-center">
          <span className="absolute left-[-10px] border-t-2 border-[#727171] w-[35vw] -translate-x-full"></span>
          <h2
            className="text-xl uppercase text-[#727171] font-bold"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Estúdio
          </h2>
        </div>

        <h2
          className="text-4xl sm:text-5xl text-[#FFFFFF] font-bold mt-3"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Oops! I Inked Again
        </h2>
        <p
          className="text-xl text-[#969595] font-light italic text-justify mt-6 mb-20"
          style={{ fontFamily: "'Yrsa', serif" }}
        >
          No nosso estúdio de tatuagens, acreditamos que cada tatuagem é uma
          extensão da identidade de quem a usa — uma forma de expressão única,
          pessoal e carregada de significado. Criámos um espaço onde a arte, o
          profissionalismo e o respeito pelo corpo e pela história de cada
          cliente se encontram.{" "}
          <span className="block mt-4">
            Trabalhamos com um ambiente acolhedor, seguro e higienizado, onde
            cada detalhe é pensado para garantir uma experiência confortável e
            memorável. A nossa equipa de tatuadores é composta por artistas
            dedicados, com estilos diversos e atenção especial à criação
            personalizada — seja para um desenho delicado ou uma peça de grande
            impacto.
          </span>
          <span className="block mt-4">
            Aqui, valorizamos o processo tanto quanto o resultado final. Desde a
            primeira conversa até ao momento em que te olhas ao espelho com a
            tua nova tatuagem, estamos contigo para garantir que cada traço
            conta a tua história da melhor forma possível.
          </span>
        </p>
        {/* </div> */}

        {/* Galeria de imagens */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 max-w-full sm:max-w-[80%] mx-auto">
          <div className="flex justify-center col-span-1 sm:col-span-2 md:col-span-2">
            <img
              src="/assets/image1.png"
              alt="Imagem 1"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => setSelectedImage("/assets/image1.png")}
            />
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/image2.png"
              alt="Imagem 2"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => setSelectedImage("/assets/image2.png")}
            />
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/image3.png"
              alt="Imagem 3"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => setSelectedImage("/assets/image3.png")}
            />
          </div>

          <div className="flex justify-center col-span-1 sm:col-span-2 md:col-span-2">
            <img
              src="/assets/image1.png"
              alt="Imagem 4"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => setSelectedImage("/assets/image1.png")}
            />
          </div>
        </div> */}

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
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* <div className="flex flex-col items-center">
          <div className="flex justify-center flex-wrap gap-[100px] pt-[150px]">
            <div
              className="h-[400px] w-[400px] bg-[url('/assets/foto.jpg')] bg-center bg-no-repeat bg-cover 
             rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] 
             animate-animate_imgg"
            ></div>

            <div className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="relative flex items-center w-full">
                  <h1 className="text-xl uppercase text-[#727171] font-bold pr-4">
                    Quem sou eu?
                  </h1>
                  <span
                    className="absolute border-t-2 border-[#727171] w-[40vw] 
  translate-x-[-650px] sm:translate-x-[-345px] left-full"
                  ></span>
                </div>

                <h1
                  className="text-5xl text-[#FFFFFF] font-bold mt-3"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  Sobre mim
                </h1>
              </div>

              <div className="max-w-[500px] text-secondary text-[19px] text-justify leading-[2] font-poppins font-normal animate-[fadeIn_3s] mt-[20px]">
                <p
                  className="text-xl text-[#969595] font-light italic text-justify mt-3 mb-20"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  Fundado em 2024, somos um estúdio de tatuagem no Porto.
                  Fundado em 2024, somos um estúdio de tatuagem no Porto.
                  Fundado em 2024, Fundado em 2024, somos um estúdio de tatuagem
                  no Porto. Fundado em 2024, somos um estúdio de tatuagem no
                  Porto. Fundado em 2024, Fundado em 2024, somos um estúdio de
                  tatuagem no Porto. Fundado em 2024, somos um estúdio de
                  tatuagem no Porto. Fundado em 2024, Fundado em 2024, somos um
                  estúdio de tatuagem no Porto.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="relative flex flex-col items-center mt-[150px] mb-[30px]">
          <h2
            className="text-5xl text-[#FFFFFF] font-bold mt-3"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Equipa
          </h2>
          <p
            className="text-xl text-[#969595] font-light italic text-justify mt-3 mb-10"
            style={{ fontFamily: "'Yrsa', serif" }}
          >
            Marcamos momentos, desenhamos histórias
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] sm:gap-[40px]">
          {cardsData.map((card) => (
            <div
              key={card.name}
              className="flex flex-col sm:flex-row h-auto sm:h-[370px] xl:h-[350px] 2xl:h-[370px] bg-[#090909] shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full object-cover h-[300px] sm:h-full xl:w-[50%] 2xl:w-full"
                src={card.image}
                alt={card.name}
              />
              <div className="flex flex-col gap-[15px] sm:gap-[20px] w-full sm:w-2/3 p-[1.5rem] sm:p-[2.25rem] xl:py-[1rem] xl:gap-0 2xl:p-[1.5rem] 2xl:gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                  <h2
                    className="text-2xl sm:text-4xl font-bold text-white"
                    style={{ fontFamily: "'Yrsa', serif" }}
                  >
                    {card.name}
                  </h2>
                  <p
                    className="text-white uppercase text-base sm:text-lg"
                    style={{ fontFamily: "'Yrsa', serif" }}
                  >
                    {card.role}
                  </p>
                </div>
                <p
                  className="text-white mt-2 leading-[20px] sm:leading-[25px] text-base sm:text-lg"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  {card.description}
                </p>
                <div className="flex justify-between items-center xl:mt-[3rem] 2xl:mt-[5rem]">
                  <a
                    href={card.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl flex items-center"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  </a>
                  <div className="flex items-center">
                    <a
                      href={`/estudio/${slugify(card.name)}`}
                      className="flex items-center justify-center text-white gap-[5px]"
                    >
                      Sobre mim
                      <svg
                        style={{ rotate: "270deg", cursor: "pointer" }}
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Galeria />

        <div className="flex items-center justify-center h-[200px] text-white p-[3rem] mt-[100px]">
          <div className="relative max-w-2xl text-center">
            <span
              className="absolute top-[-20px] left-[-50px] xl:left-[-70px] 2xl:left-[-80px] text-9xl"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              “
            </span>
            <p
              className="text-3xl font-handwritten leading-relaxed"
              style={{ fontFamily: "'Shadows Into Light', serif" }}
            >
              Marca a tua história. Coleciona arte!
            </p>
            <span
              className="absolute bottom-[-100px] right-[-40px] xl:right-[-70px] 2xl:right-[-80px] text-9xl"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              ”
            </span>
            {/* <p
              className="mt-5 text-xl"
              style={{ fontFamily: "'Shadows Into Light', serif" }}
            >
              — Carl Rogers
            </p> */}
          </div>
        </div>
      </section>

      <Footer />

      <ScrollTop />
    </>
  );
}

export default Estudio;
