import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Sección del Logo */}
      <div className="flex items-center">
        {/* Aquí irá el logo de QXM */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          QXM Logo
        </a>
      </div>

      {/* Menú de Navegación (Desktop) */}
      <nav className="hidden md:flex space-x-8 items-center">
        <a href="#empresa" className="text-gray-600 hover:text-blue-600">Empresa</a>
        <a href="#servicios" className="text-gray-600 hover:text-blue-600">Servicios</a>
        <a href="#contacto" className="text-gray-600 hover:text-blue-600">Contacto</a>
        {/* Agrega más enlaces según sea necesario */}
      </nav>

      {/* Botón CTA (Desktop) */}
      <div className="hidden md:block">
        <a href="#trabaja" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
          Trabajá con nosotros
        </a>
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
          <a href="#empresa" className="text-gray-800 hover:text-blue-600 text-lg">Empresa</a>
          <a href="#servicios" className="text-gray-800 hover:text-blue-600 text-lg">Servicios</a>
          <a href="#contacto" className="text-gray-800 hover:text-blue-600 text-lg">Contacto</a>
          <a href="#trabaja" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full text-lg">
            Trabajá con nosotros
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;