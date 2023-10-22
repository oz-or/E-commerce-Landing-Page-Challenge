/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeColor: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        lightGrayBlue: "hsl(223, 64%, 98%)",
        grayBlue: "hsl(220, 14%, 75%)",
        darkGrayBlue: "hsl(219, 9%, 45%)",
        darkestGrayBlue: "hsl(220, 13%, 13%)",
        whiteColor: "hsl(0, 0%, 100%)",
        blackColor: "hsl(0, 0%, 0%)",
      },
    },

    screens: {
      1700: "1700px",
      1440: "1440px",
      1200: "1200px",
      1100: "1100px",
      1000: "1000px",
      800: "800px",
      600: "600px",
      500: "500px",
      376: "376px",
    },
  },
  plugins: [],
};
