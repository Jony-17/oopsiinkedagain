import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "/assets/logo.png";

function NavBar({ bgColor = "bg-transparent", shadow }) {
  const location = useLocation();

  return (
    <>
      <nav
        className={`absolute top-0 z-20 w-full h-[15%] flex items-center px-4 ${bgColor} shadow-lg`}
        style={{ boxShadow: shadow }}
      >
        <ul className="flex justify-center items-center w-full m-0 p-0 list-none text-base">
          {!(location.pathname === "/") && (
            <li className="mx-4">
              <Link
                to="/"
                className="no-underline hover:text-[#565656] uppercase text-[#FFFFFF]"
              >
                Página Inicial
              </Link>
            </li>
          )}

          <li className="mx-4">
            <Link
              to="/estudio"
              className={`no-underline hover:text-[#565656] uppercase ${
                location.pathname === "/estudio"
                  ? "text-[#565656]"
                  : "text-[#FFFFFF]"
              }`}
            >
              Estúdio
            </Link>
          </li>

          <li className="mx-4">
            <Link
              to="/galeria"
              className={`no-underline hover:text-[#565656] uppercase ${
                location.pathname === "/galeria"
                  ? "text-[#565656]"
                  : "text-[#FFFFFF]"
              }`}
            >
              Galeria
            </Link>
          </li>

          <li className="mx-4">
            <Link
              to="/"
              className="no-underline hover:text-[#565656] uppercase"
            >
              <img src={logo} alt="Início" className="max-h-13 max-w-[200px]" />
            </Link>
          </li>

          <li className="mx-4">
            <Link
              to="/informações"
              className={`no-underline hover:text-[#565656] uppercase ${
                location.pathname === "/informações"
                  ? "text-[#565656]"
                  : "text-[#FFFFFF]"
              }`}
            >
              Informações
            </Link>
          </li>

          <li className="mx-4">
            <Link
              to="/contactos"
              className={`no-underline hover:text-[#565656] uppercase ${
                location.pathname === "/contactos"
                  ? "text-[#565656]"
                  : "text-[#FFFFFF]"
              }`}
            >
              Contactos
            </Link>
          </li>

          <li className="mx-4">
            <Link
              to="/blog"
              className={`no-underline hover:text-[#565656] uppercase ${
                location.pathname === "/blog"
                  ? "text-[#565656]"
                  : "text-[#FFFFFF]"
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
