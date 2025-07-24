/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Puedes ajustar este código HEX para que coincida exactamente con el de QXM
        'qxm-pink': '#E03E8F',
        'qxm-pink-dark': '#C9317F', // Un tono más oscuro para el hover
        'qxm-blue-dark': '#2D3A5D', // Un azul oscuro si lo necesitas para el logo o textos
        'qxm-blue-light': '#3B82F6', // Un azul más claro si lo necesitas
      },
      // Otras extensiones de tema si las tienes
    },
  },
  plugins: [],
}
