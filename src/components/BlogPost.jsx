import { useParams } from "react-router-dom";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function BlogPost() {
  const { slug } = useParams();

  const noticias = [
    {
      titulo: "Cuidados a ter com a pele",
      textointro:
        "Fazer uma tatuagem é mais do que marcar a pele — é marcar a história. Para garantir que o resultado final fique bonito, bem definido e saudável, os cuidados com a pele antes e depois da tatuagem são fundamentais. A pele é a 'tela' da tatuagem, e tratá-la com atenção faz toda a diferença no processo de cicatrização e na durabilidade dos traços e cores. Seja a tua primeira tattoo ou a décima, manter a pele bem cuidada é parte essencial da experiência. Abaixo, explicamos passo a passo como preparar a pele antes da sessão e como cuidar dela durante o processo de cicatrização.",
      conteudos: [
        {
          subtitulo: "Cuidados com a pele antes e depois da tatuagem",
          texto:
            "Antes de fazer uma tatuagem, é essencial preparar a pele para garantir um procedimento mais seguro e um resultado mais bonito. Manteres-te bem hidratado nos dias que antecedem a sessão ajuda a pele a ficar mais flexível e recetiva à tinta. Evita a exposição ao sol, queimaduras solares e qualquer tipo de irritação na área a ser tatuada. Nos dois dias anteriores, dorme bem, alimenta-te de forma equilibrada e evita álcool, drogas e medicamentos anticoagulantes, pois podem afinar o sangue e dificultar o processo.  No dia da tatuagem, toma banho normalmente, veste roupas confortáveis e que permitam fácil acesso à área a ser tatuada, e alimenta-te antes da sessão — isso ajuda a evitar quedas de tensão. Após a tatuagem, os cuidados são ainda mais importantes: mantém a área limpa, lavando suavemente com água fria e sabonete neutro, sempre com as mãos limpas. Aplica a pomada cicatrizante recomendada pelo tatuador e evita cobrir com roupas apertadas. Nos primeiros dias, evita completamente sol, mar, piscina, sauna e exercícios intensos. A pele passará por fases de descamação e comichão — é essencial não coçar, arrancar crostas ou esfregar a área. O uso contínuo de protetor solar, após a cicatrização completa, ajuda a preservar as cores e definição da tatuagem por muito mais tempo. Lembra-te: cada corpo reage de forma diferente, e seguir corretamente as orientações do tatuador é o melhor caminho para garantir uma cicatrização tranquila, sem infecções, manchas ou desbotamentos.",
        },
      ],
    },
    // {
    //   titulo: "Dicas...",
    //   textointro: "Mais um artigo com informações relevantes...",
    //   conteudos: [
    //     {
    //       subtitulo: "Parte 1",
    //       texto: "Aqui está a primeira parte...",
    //     },
    //     {
    //       subtitulo: "Parte 2",
    //       texto: "Aqui está a segunda parte...",
    //     },
    //   ],
    // },
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
                    <h1 className="text-3xl text-white mb-4 pb-2">
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
