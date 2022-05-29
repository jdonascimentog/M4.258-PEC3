module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#1b4332",
      secondary: "#2d6a4f",
      success: "#52b788",
      info: " #95d5b2",
      warning: "#f48c06",
      danger: "#9d0208",
      light: "#d8f3dc",
      dark: "#081c15",
      "uoc-corporate": "#081c15",
      "uoc-masterbrand": "#d8f3dc",
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      serif: ["Georgia", "Times New Roman", "serif"],
    },
  },
  plugins: [],
};
