/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["UbuntuBold", "system-ui"],
    },
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "system-ui"],
        satoshi: ["Satoshi", "system-ui"],
      },
    },
  },
  plugins: [],
};
