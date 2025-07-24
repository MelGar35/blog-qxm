import React, { useState } from 'react';
//import qxmLogo from '../assets/qxm-logo.svg'; // Asegúrate que esta ruta sea correcta para tu logo

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // Para el selector de idioma

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative z-10"> {/* Añadido z-10 para el menú mobile */}
      {/* Sección del Logo */}
      <div className="flex items-center">
        {/* Aquí irá el logo de QXM */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          QXM Logo
          </a>
      </div>


      {/* Menú de Navegación (Desktop) y Botones */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8"> {/* Flex container para alinear todo a la derecha */}
        {/* Enlaces de Navegación */}
        <nav className="flex space-x-6 lg:space-x-8">
          <a href="#que-es" className="text-gray-700 hover:text-blue-600 text-lg font-medium">¿Qué es Qxm?</a>
          <a href="#trabajadores" className="text-gray-700 hover:text-blue-600 text-lg font-medium">Trabajadores</a>
          <a href="#gobiernos" className="text-gray-700 hover:text-blue-600 text-lg font-medium">Gobiernos</a>
        </nav>

        {/* Botones de Acción */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <a href="#iniciar-sesion" className="text-blue-600 hover:text-blue-700 text-lg font-medium">Iniciar sesión</a> {/* Ajustado a enlace con color azul */}
          <a href="#registrate" className="bg-qxm-pink hover:bg-qxm-pink-dark text-white font-semibold py-2 px-6 rounded-full shadow-md text-lg"> {/* Usamos una clase personalizada para el color rosa */}
            Regístrate
          </a>

          {/* Selector de Idioma/País */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <img src="https://flagcdn.com/ar.svg" alt="Argentina Flag" className="h-5 w-auto mr-2" /> {/* Placeholder de bandera */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {/* Dropdown de idioma (simplificado por ahora) */}
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
          className="text-gray-600 focus:outline-none focus:text-blue-600"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Menú Mobile Desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 z-10"> {/* top-full para que aparezca justo debajo del header */}
          <a href="#que-es" className="text-gray-800 hover:text-blue-600 text-lg">¿Qué es Qxm?</a>
          <a href="#trabajadores" className="text-gray-800 hover:text-blue-600 text-lg">Trabajadores</a>
          <a href="#gobiernos" className="text-gray-800 hover:text-blue-600 text-lg">Gobiernos</a>
          <a href="#iniciar-sesion" className="text-blue-600 hover:text-blue-700 text-lg">Iniciar sesión</a>
          <a href="#registrate" className="bg-qxm-pink hover:bg-qxm-pink-dark text-white font-semibold py-2 px-6 rounded-full text-lg">
            Regístrate
          </a>
          {/* Selector de idioma en mobile */}
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