import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function EstudioTeam() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const cardsData = [
    {
      id: 1,
      name: "Marília",
      role: "Tatuadora",
      image: "/assets/foto.jpg",
      description:
        "Tatuadora desde 2022, especialista em linhas finas e blackwork/dotwork. Apaixonada em transformar sonhos em artes eternas na pele. ",
      hoverImage: "/assets/image1.png",
      instagram: "https://www.instagram.com",
      whatsapp: "https://www.whatsapp.com",
      images: [
        {
          src: "/assets/tattoo1.png",
          span: "col-span-1 sm:col-span-2 md:col-span-2",
        },
        { src: "/assets/tattoo2.png", span: "col-span-1" },
        { src: "/assets/tattoo3.png", span: "col-span-1" },
        { src: "/assets/tattoo4.png", span: "col-span-1" },
        { src: "/assets/tattoo6.jpg", span: "col-span-1" },
        { src: "/assets/tattoo6.jpg", span: "col-span-1" },
        {
          src: "/assets/tattoo1.png",
          span: "col-span-1 sm:col-span-2 md:col-span-2",
        },
        // {
        //   src: "/assets/tattoo1.png",
        //   span: "col-span-1 sm:col-span-2 md:col-span-3", // Novamente, para dar equilíbrio ao layout
        // },
      ],
    },
    {
      id: 2,
      name: "Ana",
      role: "Bodypiercer",
      image: "/assets/foto.jpg",
      description:
        "Tatuadora desde 2022, especialista em linhas finas e blackwork/dotwork. Apaixonada em transformar sonhos em artes eternas na pele. Tatuadora desde 2022, especialista em linhas finas e blackwork/dotwork. Apaixonada em transformar sonhos em artes eternas na pele.",
      hoverImage: "/assets/image1.png",
      instagram: "https://www.instagram.com",
      whatsapp: "https://www.whatsapp.com",
      catalogo: [
        { src: "/assets/tattoo1.png", span: "col-span-1" },
        { src: "/assets/tattoo4.png", span: "col-span-1" },
        { src: "/assets/tattoo3.png", span: "col-span-1" },
        { src: "/assets/tattoo5.png", span: "col-span-1" },
        { src: "/assets/tattoo6.jpg", span: "col-span-1" },
      ],
      images: [
        {
          src: "/assets/tattoo2.png",
          span: "col-span-1 sm:col-span-2 md:col-span-2",
        },
        { src: "/assets/tattoo1.png", span: "col-span-1" },
        { src: "/assets/tattoo4.png", span: "col-span-1" },
        { src: "/assets/tattoo3.png", span: "col-span-1" },
        { src: "/assets/tattoo5.png", span: "col-span-1" },
        { src: "/assets/tattoo6.jpg", span: "col-span-1" },
        {
          src: "/assets/tattoo4.png",
          span: "col-span-1 sm:col-span-2 md:col-span-2",
        },
        // {
        //   src: "/assets/tattoo1.png",
        //   span: "col-span-1 sm:col-span-2 md:col-span-3", // Novamente, para dar equilíbrio ao layout
        // },
      ],
    },
  ];

  function slugify(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .toLowerCase()
      .replace(/\s+/g, "-") // Substitui espaços por hífens
      .replace(/[^\w-]+/g, ""); // Remove caracteres especiais
  }
  const card = cardsData.find((n) => slugify(n.name) === slug);

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

  const carouselRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // Velocidade do movimento
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar
        bgColor="bg-[#101010]"
        shadow="inset 0 -20px 20px rgb(22, 22, 22)"
      />

      <section
        className="bg-[#101010] pt-[calc(150px+64px)] pb-[70px] px-[5%] sm:px-[10%] lg:px-[15%]"
        id="estudio"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-[50px]">
          <div className="max-w-[700px] text-left">
            <div className="flex flex-col items-center gap-[20px] mb-[50px]">
              <h1
                className="text-7xl text-white"
                style={{ fontFamily: "'Yrsa', serif" }}
              >
                {card.name}
              </h1>
              <div className="flex gap-[40px]">
                <h3
                  className="text-lg text-[#727171] uppercase"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  {card.role}
                </h3>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl flex items-center"
                >
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                </a>
              </div>
            </div>
            <p
              className="text-lg text-white text-justify"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              {card.description}
              <span className="block mt-4">{card.description}</span>
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={imageSrc[card.id] || card.image}
              className="xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] object-cover rounded-tl-3xl rounded-br-3xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer animate-small-bounce"
              alt={`${card.name}`}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={() => handleMouseLeave(card.id)}
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 max-w-[90%] mx-auto mt-[200px]">
          {card.images.map((image, index) => (
            <div key={index} className={`flex justify-center ${image.span}`}>
              <img
                src={image.src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-[300px] object-cover cursor-pointer"
                loading="lazy"
                onClick={() => setSelectedImage(image.src)}
              />
            </div>
          ))}
        </div> */}

        {card.role === "Bodypiercer" ? (
          <>
            <div>
              <h2
                className="text-white text-[50px] mt-[200px] mb-[20px]"
                style={{ fontFamily: "'Yrsa', serif" }}
              >
                Catálogo
              </h2>
            </div>
            <div className="relative max-w-[100%] mx-auto overflow-hidden">
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {card.catalogo.map((catalogo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[300px] scroll-snap-start"
                  >
                    <img
                      src={catalogo.src}
                      alt={`Imagem ${index + 1}`}
                      className="w-full h-[300px] object-cover rounded-lg cursor-pointer"
                      onClick={() => setSelectedImage(catalogo.src)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 max-w-[90%] mx-auto mt-[200px]">
          {card.images.map((image, index) => (
            <div key={index} className={`flex justify-center ${image.span}`}>
              <img
                src={image.src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-[300px] object-cover cursor-pointer"
                loading="lazy"
                onClick={() => setSelectedImage(image.src)}
              />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setSelectedImage(null)}
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
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
      <ScrollTop />
    </>
  );
}

export default EstudioTeam;
