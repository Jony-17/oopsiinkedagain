import { useState } from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Estudio() {
  const cardsData = [
    {
      id: 1,
      name: "Marília",
      role: "Tatuadora",
      image: "/assets/foto.jpg",
      hoverImage: "/assets/image1.png",
      instagram: "https://www.instagram.com",
      whatsapp: "https://www.whatsapp.com",
    },
    {
      id: 2,
      name: "Ana",
      role: "Designer",
      image: "/assets/foto.jpg",
      hoverImage: "/assets/image1.png",
      instagram: "https://www.instagram.com",
      whatsapp: "https://www.whatsapp.com",
    },
    // {
    //   id: 3,
    //   name: "Carlos",
    //   role: "Fotógrafo",
    //   image: "/assets/foto.jpg",
    //   hoverImage: "/assets/image1.png",
    //   instagram: "https://www.instagram.com",
    //   whatsapp: "https://www.whatsapp.com",
    // },
  ];

  const [imageSrc, setImageSrc] = useState({});

  const handleMouseEnter = (id) => {
    setImageSrc((prevState) => ({
      ...prevState,
      [id]: cardsData.find((card) => card.id === id).hoverImage,
    }));
  };

  const handleMouseLeave = (id) => {
    setImageSrc((prevState) => ({
      ...prevState,
      [id]: cardsData.find((card) => card.id === id).image,
    }));
  };

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
          className="text-5xl text-[#FFFFFF] font-bold mt-3"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Oops I Inked Again
        </h2>
        <p
          className="text-xl text-[#969595] font-light italic text-justify mt-6 mb-20"
          style={{ fontFamily: "'Yrsa', serif" }}
        >
          Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado em
          2024, somos um estúdio de tatuagem no Porto. Fundado em 2024, somos um
          estúdio de tatuagem no Porto. Fundado em 2024, somos um estúdio de
          tatuagem no Porto.Fundado em 2024, somos um estúdio de tatuagem no
          Porto. Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado
          em 2024, Fundado em 2024, somos um estúdio de tatuagem no Porto.
          Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado em
          2024, Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado
          em 2024, somos um estúdio de tatuagem no Porto. Fundado em 2024,
          Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado em
          2024, somos um estúdio de tatuagem no Porto. Fundado em 2024, Fundado
          em 2024, somos um estúdio de tatuagem no Porto. Fundado em 2024, somos
          um estúdio de tatuagem no Porto. Fundado em 2024,{" "}
          <span className="block mt-4">
            Fundado em 2024, somos um estúdio de tatuagem no Porto. Fundado em
            2024, somos um estúdio de tatuagem no Porto. Fundado em 2024, somos
            um estúdio de tatuagem no Porto. Fundado em 2024, somos um estúdio
            de tatuagem no Porto. Fundado em 2024, somos um estúdio de tatuagem
            no Porto. Fundado em 2024, somos um estúdio de tatuagem no Porto.
            Fundado em 2024, Fundado em 2024, somos um estúdio de tatuagem no
            Porto.
          </span>
        </p>
        {/* </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 max-w-[80%] mx-auto">
          {/* Imagem 1*/}
          <div className="flex justify-center col-span-1 sm:col-span-2 md:col-span-2">
            <img
              src="/assets/image1.png"
              alt="Imagem 1"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 2*/}
          <div className="flex justify-center">
            <img
              src="/assets/image2.png"
              alt="Imagem 2"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 3*/}
          <div className="flex justify-center">
            <img
              src="/assets/image3.png"
              alt="Imagem 3"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 4*/}
          <div className="flex justify-center col-span-1 sm:col-span-2 md:col-span-2">
            <img
              src="/assets/image1.png"
              alt="Imagem 4"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
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
        </div>

        {/* <div className="relative flex items-center justify-center mt-[150px] mb-[50px]">
          <h2
            className="text-5xl text-[#FFFFFF] font-bold mt-3"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Equipa
          </h2>
        </div> */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 max-w-[90%] mx-auto place-items-center"> */}
        {/* --- */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8 max-w-[90%] mx-auto place-items-center">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-md rounded overflow-hidden shadow-lg bg-[#090909]"
            >
              <img
                className="w-full h-[350px] object-cover"
                src={imageSrc[card.id] || card.image}
                alt="Imagem do Card"
                onMouseEnter={() => handleMouseEnter(card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-white text-2xl mb-2 flex justify-center">
                  {card.name}
                </div>
                <p className="text-white text-base flex justify-center uppercase">
                  {card.role}
                </p>
              </div>
              <div className="px-6 pt-4 pb-6 gap-[15px] text-white flex justify-center">
                <a
                  href={card.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href={card.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex items-center justify-center h-[200px] text-white p-[3rem] mt-[150px]">
          <div className="relative max-w-2xl text-center">
            <span
              className="absolute top-[-20px] left-[-60px] text-9xl"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              “
            </span>
            <p
              className="text-3xl font-handwritten leading-relaxed"
              style={{ fontFamily: "'Shadows Into Light', serif" }}
            >
              Não podemos mudar, não podemos nos afastar do que somos enquanto
              não aceitarmos profundamente o que somos.
            </p>
            <span
              className="absolute bottom-[-100px] right-[-30px] text-9xl"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              ”
            </span>
            <p
              className="mt-5 text-xl"
              style={{ fontFamily: "'Shadows Into Light', serif" }}
            >
              — Carl Rogers
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <ScrollTop />
    </>
  );
}

export default Estudio;
