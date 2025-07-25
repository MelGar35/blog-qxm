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
        'qxm-pink': '#dd3083',
        'qxm-gray': '#8b9099ff', // Un azul oscuro si lo necesitas para el logo o textos
      },
      fontFamily: {
        // Sobrescribe la pila 'sans' por defecto de Tailwind
        sans: ['Barlow', 'sans-serif'], // 'Barlow' es el nombre exacto, 'sans-serif' es el fallback
      },// Otras extensiones de tema si las tienes
    },
  },
  plugins: [],
}
