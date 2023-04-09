/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        gray: {
          900: "#323232",
          50:"#EFEFEF",
        },
        green: {
          50:"#01E994",
        }
     
      },
    },
  },
  plugins: [],
}