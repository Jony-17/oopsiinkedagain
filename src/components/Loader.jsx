import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  // Função para esconder o loader
  const hideLoader = () => {
    setIsLoaderVisible(false);
  };

  useEffect(() => {
    // Quando a página carregar, esconder o loader após um delay
    const hideAfterLoad = () => {
      setTimeout(() => {
        hideLoader();
      }, 1000); // Ajuste o tempo para garantir que o loader apareça por tempo suficiente
    };

    // Garantindo que o loader seja escondido após o carregamento
    window.addEventListener("load", hideAfterLoad);

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener("load", hideAfterLoad);
    };
  }, []);

  return (
    <div>
      {isLoaderVisible && (
        // <div className="relative w-[250px] h-[50px] leading-[50px] text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans uppercase font-black text-[var(--main-color)] tracking-widest transition-opacity duration-[1.1s] ease-in-out opacity-100 visible loader">
        //   {/* Loader Animation */}
        //   <div className="circle animate-load"></div>
        // </div>

        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Loader;
