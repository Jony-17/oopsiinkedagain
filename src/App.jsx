import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Estudio from "./components/Estudio";
import EstudioTeam from "./components/EstudioTeam";
// import Galeria from "./components/Galeria";
import Orçamento from "./components/Orçamento";
import Informações from "./components/Informações";
import Contactos from "./components/Contactos";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-full font-Raleway">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estudio" element={<Estudio />} />
          <Route path="/estudio/:slug" element={<EstudioTeam />} />
          {/* <Route path="/galeria" element={<Galeria />} /> */}
          <Route path="/orçamento" element={<Orçamento />} />
          <Route path="/informações" element={<Informações />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
