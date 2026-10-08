/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#DCEBF7',   // Áreas de apoio
          border: '#9CC3E4',  // Linhas e detalhes
          primary: '#1F4E79', // Títulos e destaques
          body: '#2B3440',    // Texto (Light mode)
          muted: '#5F6B7A',   // Notas e fontes
          // Dark mode variants
          darkBg: '#0f172a',
          darkCard: '#1e293b',
          darkText: '#e2e8f0'
        }
      },
      fontFamily: {
        sans: ['Calibri', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
