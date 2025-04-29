import { useState } from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Galeria() {
  const [category, setCategory] = useState("Todas");
  const [selectedImage, setSelectedImage] = useState(null); // Estado para modal

  const imagens = [
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio1_aqc8lf.jpg",
      alt: "Imagem 1",
      category: "Estúdio",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio2_e8w7ze.jpg",
      alt: "Imagem 2",
      category: "Tattoos",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio3_zqctjz.jpg",
      alt: "Imagem 3",
      category: "Estúdio",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio4_yxhxv9.jpg",
      alt: "Imagem 4",
      category: "Tattoos",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio5_rsvs5t.jpg",
      alt: "Imagem 5",
      category: "Estúdio",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio6_oin186.jpg",
      alt: "Imagem 6",
      category: "Tattoos",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960391/estudio7_xw68yh.jpg",
      alt: "Imagem 5",
      category: "Estúdio",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960392/estudio8_deqqja.jpg",
      alt: "Imagem 6",
      category: "Tattoos",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960078/tattoo1_zstdtm.jpg",
      alt: "Imagem 5",
      category: "Estúdio",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960078/tattoo2_peobqh.jpg",
      alt: "Imagem 6",
      category: "Tattoos",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo3_mesizk.jpg",
      alt: "Imagem 5",
      category: "Estúdio",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo4_dfkqfm.jpg",
      alt: "Imagem 6",
      category: "Tattoos",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo5_jrxh01.jpg",
      alt: "Imagem 5",
      category: "Estúdio",
    },
    {
      src: "https://res.cloudinary.com/dr9j4bjys/image/upload/v1745960079/tattoo6_sjxeu6.jpg",
      alt: "Imagem 6",
      category: "Tattoos",
    },
  ];

  const imagensFiltradas =
    category === "Todas"
      ? imagens
      : imagens.filter((img) => img.category === category);

  return (
    <>
      <section
        className="bg-[#101010] pt-[calc(150px+64px)] pb-[70px] px-0"
        style={{ gridColumnGap: "3.75vw", gridRowGap: "3.75vw" }}
      >
        <div className="relative flex flex-col items-center">
          {/* <h2 className="text-xl uppercase text-[#727171] font-bold">
            Galeria
          </h2>
          <h1
            className="text-4xl sm:text-5xl text-[#FFFFFF] text-center font-bold mt-3"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            O meu trabalho
          </h1>

          <div className="flex flex-wrap gap-[0.6rem] justify-center mt-8">
            {["Todas", "Estúdio", "Tattoos"].map((cat) => (
              <button
                key={cat}
                className={`mt-4 mb-6 px-6 py-3 border uppercase transition duration-700 ${
                  category === cat
                    ? "border-[#727171] text-[#727171] hover:bg-[#727171] hover:text-white"
                    : " border-white text-white hover:bg-white hover:text-black"
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div> */}
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-full sm:max-w-full mx-auto">
          {imagensFiltradas.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[300px] object-cover cursor-pointer hover:opacity-75 transition duration-300"
                loading="lazy"
                onClick={() => setSelectedImage(img.src)} // Abre o modal
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            onClick={() => setSelectedImage(null)} // Fecha ao clicar fora
          >
            <div className="relative max-w-3xl mx-auto">
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt={imagens.alt}
                className="max-w-full max-h-screen object-contain"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Galeria;
