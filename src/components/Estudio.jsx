import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./Navbar";
import Footer from "./Footer";

function Estudio() {
  const scrollToTop = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollToTop.current.style.display = "block";
      } else {
        scrollToTop.current.style.display = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
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

        <div className="grid grid-cols-3 gap-3 mt-8">
          {/* Imagem 1*/}
          <div className="flex justify-center col-span-2">
            <img
              src="/src/assets/image1.png"
              alt="Imagem 1"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 2*/}
          <div className="flex justify-center">
            <img
              src="/src/assets/image2.png"
              alt="Imagem 2"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 3*/}
          <div className="flex justify-center">
            <img
              src="/src/assets/image3.png"
              alt="Imagem 3"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Imagem 4*/}
          <div className="flex justify-center col-span-2">
            <img
              src="/src/assets/image1.png"
              alt="Imagem 4"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center flex-wrap gap-[100px] pt-[150px]">
            <div
              className="h-[400px] w-[400px] bg-[url('/src/assets/foto.jpg')] bg-center bg-no-repeat bg-cover 
             rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] 
             animate-animate_imgg"
            ></div>

            <div className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="relative flex items-center w-full">
                  <h1 className="text-xl uppercase text-[#727171] font-bold pr-4">
                    Quem sou eu?
                  </h1>
                  <span className="absolute left-full border-t-2 border-[#727171] w-[40vw] translate-x-[-345px]"></span>
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

        <div className="flex items-center justify-center h-[200px] text-white p-6 mt-[150px]">
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

      <button
        className="hidden fixed bottom-5 right-5 z-[99] text-[16px] border-none outline-none bg-[#616161] text-white cursor-pointer p-4 rounded-[10px]"
        ref={scrollToTop}
        onClick={scrollTopFunction}
        id="scrollToTopBtn"
        title="Go to top"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </>
  );
}

export default Estudio;
