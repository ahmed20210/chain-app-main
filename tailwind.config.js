module.exports = {
  content: ["./src/*.html", "./src/**/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4b8ef1",
      },
      borderRadius: {
        "4xl": "50px",
      },
      boxShadow: {
        "3xl": "0 0 15px rgba(0, 0, 0, 0.2)",
      },
      width: {
        "3/13": "24%",
        "2/13": "30%",
        "1/13": "22%",
      },
      padding: {
        "97": "500px",
      },
      screens:{
        'sm': '640px',
        'md': '768px',
        "xmd":"880px",
        "lg":"1024px",
        "xl":"1280px",
      }
    },
  },
};
