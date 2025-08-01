import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Creamos un array de números de página para iterar
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-24 mb-6"> {/* Ajuste de margen mantenido */}
      {/* Botón para la página anterior */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors font-medium"
      >
        «
      </button>

      {/* Botones numerados */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`
            px-4 py-2 rounded-md font-medium transition-colors
            ${currentPage === number
              ? 'bg-qxm-blue text-white' // Estilo para la página actual
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300' // Estilo para otras páginas
            }
          `}
        >
          {number}
        </button>
      ))}

      {/* Botón para la página siguiente */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors font-medium"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;