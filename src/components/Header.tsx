import React, { useState } from 'react';
import qxmLogo from '../assets/logo.svg'; 


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-5 fixed top-0 left-0 w-full z-10">
      <div className="w-full flex md:justify-evenly justify-between items-center px-4 md:px-0">
        {/* Sección del Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            <img src={qxmLogo} alt="QXM Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Menú de Navegación (Desktop) y Botones */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-6 lg:space-x-12">
            <a href="#que-es" className="text-[#5c6474] hover:underline text-2xl font-medium">¿Que es Qxm?</a>
            <a href="#trabajadores" className="text-[#5c6474] hover:underline text-2xl font-medium">Trabajadores</a>
            <a href="#gobiernos" className="text-[#5c6474] hover:underline text-2xl font-medium">Gobiernos</a>
          </nav>

          <div className="flex items-center ml-12 space-x-4 lg:space-x-10 ">
            <a href="#iniciar-sesion" className="text-[#0d4676] hover:text-qxm-pink text-2xl font-semibold">Iniciar sesión</a>
            <a href="#registrate" className="bg-qxm-pink text-white font-semibold py-2 px-6 rounded-md shadow-md text-lg border-2 border-transparent hover:bg-white hover:text-qxm-pink hover:border-qxm-pink transition-colors duration-300">
              Regístrate
            </a>

            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center text-gray-700 focus:outline-none"
              >
                <img src="https://flagcdn.com/ar.svg" alt="Argentina Flag" className="h-7 w-auto mr-2" />
                <svg className="w-8 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-20">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <img src="https://flagcdn.com/ar.svg" alt="Argentina Flag" className="h-4 w-auto inline-block mr-2" /> ES
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="h-4 w-auto inline-block mr-2" /> EN
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Menú Hamburguesa (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-qxm-blue focus:outline-none focus:text-qxm-blue">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-right">
                <line x1="21" x2="3" y1="6" y2="6"/>
                <line x1="21" x2="9" y1="12" y2="12"/>
                <line x1="21" x2="7" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 z-30">
          <h6 className="text-gray-700 text-medium">Estas navegando en Qxm <br /><strong>Argentina</strong></h6>
          <a href="#trabajadores" className="text-qxm-blue hover:text-qxm-pink text-xl">Trabajadores</a>
          <a href="#gobiernos" className="text-qxm-blue hover:text-qxm-pink text-xl">Gobiernos</a>
          <a href="#iniciar-sesion" className="text-qxm-blue hover:text-qxm-pink text-xl font-semibold">Iniciar sesión</a>
          <a href="#registrate" className="bg-qxm-pink text-white font-semibold py-2 px-6 rounded-md shadow-md text-xl text-center border-2 border-transparent hover:bg-white hover:text-qxm-pink hover:border-qxm-pink transition-colors duration-300">
            Regístrate
          </a>
          <div className="relative w-full text-center">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none w-full"
            >
              <img src="https://flagcdn.com/ar.svg" alt="Argentina Flag" className="h-5 w-auto mr-2" />
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-20">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <img src="https://flagcdn.com/ar.svg" alt="Argentina Flag" className="h-4 w-auto inline-block mr-2" /> ES
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="h-4 w-auto inline-block mr-2" /> EN
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
