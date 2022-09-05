/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // MENIMPA
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b"
      },
      fontFamily: {
        poppins: "Poppins",
        macondo: "Macondo",
        // anton: "Anton",
        cinzel: "Cinzel",
        bitter: "Bitter",
        anton: "Anton",
        cormorant: "Cormorant+SC",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
