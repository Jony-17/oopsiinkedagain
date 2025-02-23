import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Estudio from "./components/Estudio";
import Galeria from "./components/Galeria";
import Informacoes from "./components/Informacoes";
import Contactos from "./components/Contactos";

function App() {
  return (
    <div className="min-h-full font-Raleway">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estudio" element={<Estudio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/informacoes" element={<Informacoes />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
