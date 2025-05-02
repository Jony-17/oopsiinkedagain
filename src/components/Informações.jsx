import { useState } from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Informacoes() {
  const [activeIndex, setActiveIndex] = useState([]);

  const listaInformacoes = [
    {
      questao:
        "É necessário agendar um horário ou aceitam clientes sem marcação?",
      resposta:
        "Trabalhamos com agendamento para garantir a qualidade e atenção que cada cliente merece. Atendimentos sem marcação são possíveis apenas em horários vagos.",
    },
    {
      questao: "Quais os métodos de pagamento aceites?",
      resposta: "Numerário, transferência bancária, MbWay ou multibanco.",
    },
    {
      questao: "Como me devo preparar para fazer uma tatuagem?",
      resposta:
        "Dormir bem, alimentar-se, evitar o álcool ou drogas 24h antes da sessão. Traz roupas confortáveis.",
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
    {
      questao: "Que cuidados devo ter após a tatuagem?",
      resposta:
        "Lavar com sabonete neutro, aplicar pomada cicatrizante, evitar sol piscina ou praia, bem como, não coçar ou arrancar crostas. Explicamos tudo no dia da sessão.",
    },
    {
      questao: "O estúdio segue normas de higiene e segurança?",
      resposta:
        "Sim, usamos materiais descartáveis, cartuchos esterilizados, luvas e ambiente higienizado conforme as normas de biossegurança atualmente em vigor.",
    },
    {
      questao:
        "É possível trazer um desenho próprio ou preciso de escolher do catálogo?",
      resposta: "Podes trazer a tua ideia, referência ou arte.",
    },
    {
      questao: "Como remarcar ou cancelar um agendamento?",
      resposta:
        "Contactar o estúdio no mínimo com 1 dia de antecedência. Cancelamentos em cima da hora ou o não comparecimento, podem resultar no pedido de um sinal numa próxima vez.",
    },
    {
      questao: "Vendem ou indicam produtos para cicatrização?",
      resposta:
        "Sim, atualmente trabalhamos com a marca OTZI. Temos também disponível para compra no estúdio.",
    },
    {
      questao: "Posso levar acompanhante no dia de tatuagem?",
      resposta:
        "Sim, desde que não comprometa o profissional. Limitamos a um acompanhante por cliente.",
    },
    {
      questao: "O que acontece se me atrasar para o dia marcado?",
      resposta:
        "Atrasos até 15 minutos são tolerados. Após esse tempo, o atendimento terá de ser reagendado e pedido um sinal.",
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
            backgroundImage: "url(/assets/background2.png)",
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
                <p className="text-white sm:text-base text-sm text-justify">
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
