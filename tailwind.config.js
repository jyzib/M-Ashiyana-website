/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '93':'93px'
      },
      height: {
        '90': '90px',
      },
      boxShadow: {
        'donation': ' 1px 0px 65px 3px rgba(0, 0, 0, 0.25)',
        'logo': '1px 2px 33px 9px rgba(0, 0, 0, 0.25)'
      },
      borderWidth: {
        'donation': '16px',
        'logo': '1px'
      },
      colors:{
        'blue': 'rgba(1, 46, 67, 1)'
      },
      borderRadius: {
        '65': '65px',
        'logo': '34px 36px 33px 30px',
        '7':'7px'
      },
      backgroundImage: {
        'donation': "linear-gradient(0deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2)), linear-gradient(105.27deg, #FFD5D5 9.26%, #FF0000 157.3%)",
        'logo': 'linear-gradient(138.28deg, #87D9FF -136.65%, #012E43 94.63%), linear-gradient(104.91deg, #4CA0C7 12.67%, #FF0000 143.3%)'
      }
    },
  },
  plugins: [],
}

