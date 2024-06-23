/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#2BA5DD',
      },
      backgroundImage: {
        'common-bg': "url('/src/assets/background-blue.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

