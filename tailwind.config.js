module.exports = {
  model: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        200: '200px',
        250:'250px',
        150: '150px',
        100:'100px',
        1020:'1020px'
      },
      colors: {
        amazon_blue: {
          light:"#232F3E",
          DEFAULT:"#131921",
        }
      },
      backgroundColor: ['active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
