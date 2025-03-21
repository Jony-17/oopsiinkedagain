import { useState } from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Informacoes() {
  const [activeIndex, setActiveIndex] = useState([]);

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
    {
      questao: "Quais são os cuidados a ter depois da tatuagem?",
      resposta:
        "Após a tatuagem, é essencial manter a área limpa, aplicar pomada cicatrizante e evitar exposição ao sol. Também deve evitar água do mar e piscina nas primeiras semanas.",
    },
    {
      questao: "Quais são os cuidados a ter depois da tatuagem?",
      resposta:
        "Após a tatuagem, é essencial manter a área limpa, aplicar pomada cicatrizante e evitar exposição ao sol. Também deve evitar água do mar e piscina nas primeiras semanas.",
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

  return (
    <>
      <NavBar
        bgColor="bg-[#101010]"
        shadow="inset 0 -20px 20px rgb(22, 22, 22)"
      />

      <section
        className="bg-[#101010] pt-[calc(150px+64px)] pb-[70px] px-[5%] sm:px-[10%] lg:px-[15%]"
        id="informacoes"
      >
        <div
          className="absolute right-0 top-0 h-full w-[200px] hidden sm:block"
          style={{
            backgroundImage: "url(//assetsbackground2.png)",
            backgroundSize: "250px auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "20% 30%",
            transform: "scaleX(-1)",
          }}
        ></div>
        <div className="relative flex items-center">
          <span className="absolute left-[-10px] border-t-2 border-[#727171] w-[35vw] -translate-x-full"></span>
          <h2
            className="text-xl uppercase text-[#727171] font-bold"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Informações
          </h2>
        </div>
        <h2
          className="text-5xl text-[#FFFFFF] font-bold mt-3"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Perguntas Frequentes
        </h2>

        <div className="w-full">
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
                  className="text-white text-xl sm:text-2xl lg:text-xl"
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
      </section>

      <Footer />

      <ScrollTop />
    </>
  );
}

export default Informacoes;
