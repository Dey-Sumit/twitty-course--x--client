module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#CCCDD0",
          400: "#484C55",
          500: "#3B424C",
          600: "#303741",
          700: "#272E38",
        },
        primary: "#1C9BEF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
