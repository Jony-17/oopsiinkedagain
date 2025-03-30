import { useParams } from "react-router-dom";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function BlogPost() {
  const { slug } = useParams();

  const noticias = [
    {
      titulo: "Cuidados a ter com a pele",
      textointro: "Fundado em 2024, somos um estúdio de tatuagem no Porto...",
      conteudos: [
        {
          subtitulo: "Introdução",
          texto: "Aqui está o conteúdo de introdução...",
        },
        {
          subtitulo: "Dicas Essenciais",
          texto: "Aqui estão algumas dicas importantes...",
        },
      ],
    },
    {
      titulo: "Dicas...",
      textointro: "Mais um artigo com informações relevantes...",
      conteudos: [
        {
          subtitulo: "Parte 1",
          texto: "Aqui está a primeira parte...",
        },
        {
          subtitulo: "Parte 2",
          texto: "Aqui está a segunda parte...",
        },
      ],
    },
  ];

  const noticia = noticias.find(
    (n) =>
      n.titulo
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "") === slug
  );

  if (!noticia) {
    return <h2>Artigo não encontrado</h2>;
  }

  return (
    <div>
      <>
        <NavBar
          bgColor="bg-[#101010]"
          shadow="inset 0 -20px 20px rgb(22, 22, 22)"
        />
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
              Blog / {noticia.titulo}
            </h2>
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#FFFFFF] font-bold mt-7"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            {noticia.titulo}
          </h2>

          <div className="flex flex-col">
            <div className="mt-[40px]">
              <div className="bg-[#090909] px-8 py-3 border-l-2 border-white border-solid">
                <p
                  className="text-xl text-[#969595] font-light italic text-justify my-5"
                  style={{ fontFamily: "'Yrsa', serif" }}
                >
                  {noticia.textointro}
                </p>
              </div>

              <div className="flex flex-col">
                {noticia.conteudos.map((conteudo, index) => (
                  <div key={index} className="mt-[40px] py-6 rounded-lg">
                    <h1 className="text-4xl text-white mb-4 pb-2">
                      {conteudo.subtitulo}
                    </h1>
                    <p
                      className="text-lg text-[#969595] text-justify mt-3"
                      style={{ fontFamily: "'Yrsa', serif" }}
                    >
                      {conteudo.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />

        <ScrollTop />
      </>
    </div>
  );
}

export default BlogPost;
