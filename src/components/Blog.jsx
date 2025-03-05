import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Estudio() {
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  }

  const noticias = [
    {
      titulo: "Cuidados a ter com a pele",
      imagem: "/src/assets/image1.png",
    },
    {
      titulo: "Dicas...",
      imagem: "/src/assets/image2.png",
    },
  ];

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
        className="bg-[#101010] pt-[250px] pb-[70px] px-[15%]"
        id="estudio"
      >
        {/* <div className="relative"> */}
        <div className="relative flex items-center">
          <span className="absolute left-[-10px] border-t-2 border-[#727171] w-[35vw] -translate-x-full"></span>
          <h2
            className="text-xl uppercase text-[#727171] font-bold"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Blog
          </h2>
        </div>
        <h2
          className="text-5xl text-[#FFFFFF] font-bold mt-3"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Notícias
        </h2>
        <div className="grid grid-cols-3 gap-[50px] mt-10">
          {noticias.map((noticia, index) => (
            <div key={index} className="flex flex-col justify-center">
              <img
                src={noticia.imagem}
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
              <div className="flex flex-col">
                <h1 className="text-[18px] text-white mt-[28px]">
                  {noticia.titulo}
                </h1>
                <a
                  href={`/blog/${slugify(noticia.titulo)}`}
                  className="outline-none border-none rounded-[5rem] uppercase text-[15px] cursor-pointer mt-[30px] text-white transition duration-200 flex items-center justify-start gap-5 no-underline"
                >
                  Saiba mais
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ml-3 text-[15px]"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <ScrollTop />
    </>
  );
}

export default Estudio;
