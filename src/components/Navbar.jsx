

import { Link, useLocation } from "react-router-dom";
import logo from "//oopsiinkedagain/assets/logo.png";
import React, { useState } from "react";

function NavBar({ bgColor = "bg-transparent", shadow }) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/*<!-- Header --> */}
      <header
        className={`fixed lg:absolute z-20 w-full h-[15vh] ${bgColor} shadow-lg`}
        style={{ boxShadow: shadow }}
      >
        <div className="relative mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] h-full">
          <nav
            aria-label="main navigation"
            className="flex h-full items-center justify-center text-slate-700 relative"
            role="navigation"
          >
            {/* Logo - Sempre visível à esquerda */}
            <div className="absolute sm:hidden left-6 top-1/2 transform -translate-y-1/2 lg:relative lg:translate-y-0">
              <Link to="/">
                <img src={logo} alt="Início" className="max-h-13 max-w-[150px]" />
              </Link>
            </div>

            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain px-8 pb-12 pt-24 mt-12 sm:mt-0 transition-[opacity,visibility] duration-300 backdrop-blur-2xl lg:backdrop-blur-none lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-center lg:overflow-visible lg:bg-[#101010]/0 lg:px-0 lg:py-0 lg:opacity-100 ${
                isToggleOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {!(location.pathname === "/") && (
                <li role="none" className="flex items-center">
                  <Link
                    role="menuitem"
                    className="uppercase px-6 py-4 text-white hover:text-[#565656]"
                    to="/"
                  >
                    Página Inicial
                  </Link>
                </li>
              )}

              <li role="none" className="flex items-center">
                <Link
                  role="menuitem"
                  className={`uppercase px-6 py-4 hover:text-[#565656] ${
                    location.pathname === "/estudio"
                      ? "text-[#565656]"
                      : "text-[#FFFFFF]"
                  }`}
                  to="/estudio"
                >
                  Estúdio
                </Link>
              </li>

              <li role="none" className="flex items-center">
                <Link
                  role="menuitem"
                  className={`uppercase px-6 py-4 hover:text-[#565656] ${
                    location.pathname === "/galeria"
                      ? "text-[#565656]"
                      : "text-[#FFFFFF]"
                  }`}
                  to="/galeria"
                >
                  Galeria
                </Link>
              </li>

              <li role="none" className="hidden lg:flex items-center">
                <Link
                  role="menuitem"
                  className="uppercase px-6 py-4 hover:text-[#565656]"
                  to="/"
                >
                  <img
                    src={logo}
                    alt="Início"
                    className="max-h-13 max-w-[200px]"
                  />
                </Link>
              </li>

              <li role="none" className="flex items-center">
                <Link
                  role="menuitem"
                  className={`uppercase px-6 py-4 hover:text-[#565656] ${
                    location.pathname === "/informacoes"
                      ? "text-[#565656]"
                      : "text-[#FFFFFF]"
                  }`}
                  to="/informacoes"
                >
                  Informações
                </Link>
              </li>

              <li role="none" className="flex items-center">
                <Link
                  role="menuitem"
                  className={`uppercase px-6 py-4 hover:text-[#565656] ${
                    location.pathname === "/contactos"
                      ? "text-[#565656]"
                      : "text-[#FFFFFF]"
                  }`}
                  to="/contactos"
                >
                  Contactos
                </Link>
              </li>

              <li role="none" className="flex items-center">
                <Link
                  role="menuitem"
                  className={`uppercase px-6 py-4 hover:text-[#565656] ${
                    location.pathname === "/blog"
                      ? "text-[#565656]"
                      : "text-[#FFFFFF]"
                  }`}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`absolute right-6 order-10 block h-10 w-10 self-center lg:hidden ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;