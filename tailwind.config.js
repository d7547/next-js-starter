/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bismarkLight: "#486284",
        bismarkDark: "#3b4e64",
        cadetBlueLight: "#AAB5C3",
        cadetBlueDark: "#8B9BB2",
        botticelliLight: "#CED7E4",
        botticelliDark: "#B7C9D8",
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.6s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}