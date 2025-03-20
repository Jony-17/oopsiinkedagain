import { useState } from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Galeria() {
  const [category, setCategory] = useState("Todas");

  const imagens = [
    { src: "/assets/image1.png", alt: "Imagem 1", category: "Estúdio" },
    { src: "/assets/image2.png", alt: "Imagem 2", category: "Tattoos" },
    { src: "/assets/image3.png", alt: "Imagem 3", category: "Estúdio" },
    { src: "/assets/image3.png", alt: "Imagem 4", category: "Tattoos" },
    { src: "/assets/image1.png", alt: "Imagem 5", category: "Estúdio" },
    { src: "/assets/image2.png", alt: "Imagem 6", category: "Tattoos" },
  ];

  const imagensFiltradas =
    category === "Todas"
      ? imagens
      : imagens.filter((img) => img.category === category);

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
        className="bg-[#101010] pt-[calc(150px+64px)] pb-[70px] px-[5%] sm:px-[10%] lg:px-[15%]"
        id="estudio"
      >
        <div
          className="absolute right-0 top-0 h-full w-[200px] sm:w-[150px] md:w-[200px] hidden sm:block"
          style={{
            backgroundImage: "url(/assets/background2.png)",
            backgroundSize: "250px auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "20% 30%",
            transform: "scaleX(-1)",
          }}
        ></div>
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

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button
              className={`mt-4 mb-6 px-6 py-3 border uppercase transition duration-700 ${
                category === "Todas"
                  ? "border-[#727171] text-[#727171] hover:bg-[#727171] hover:text-white"
                  : " border-white text-white hover:bg-white hover:text-black"
              }`}
              onClick={() => setCategory("Todas")}
            >
              Todas
            </button>
            <button
              className={`mt-4 mb-6 px-6 py-3 border uppercase transition duration-700 ${
                category === "Estúdio"
                  ? "border-[#727171] text-[#727171] hover:bg-[#727171] hover:text-white"
                  : " border-white text-white hover:bg-white hover:text-black"
              }`}
              onClick={() => setCategory("Estúdio")}
            >
              Estúdio
            </button>
            <button
              className={`mt-4 mb-6 px-6 py-3 border uppercase transition duration-700 ${
                category === "Tattoos"
                  ? "border-[#727171] text-[#727171] hover:bg-[#727171] hover:text-white"
                  : " border-white text-white hover:bg-white hover:text-black"
              }`}
              onClick={() => setCategory("Tattoos")}
            >
              Tattoos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-[80%] mx-auto">
          {imagensFiltradas.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <button className="mt-12 px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition duration-700">
            Mostrar mais
          </button>
        </div> */}
      </section>

      <section className="bg-[#101010] pt-[150px] pb-[70px]" id="tattoos">
        <div
          className="relative h-[25vh] bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/background1.png)" }}
        >
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase font-bold w-full text-center"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Entre em contacto e obtenha o seu orçamento
          </h2>
        </div>
      </section>

      <Footer />

      <ScrollTop />
    </>
  );
}

export default Galeria;
