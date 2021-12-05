module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        '5.5xl': ['3.5rem', 1],
      },
      colors: {
        green: {
          lighter: '#C1EBE3',
          light: '#12C8A2',
          DEFAULT: '#00b691',
        },
        black: '#101010',
      },
      boxShadow: {
        widget: '0px 4.545454978942871px 13.636364936828613px 0px #00000017;',
      },
      dropShadow: {
        float: '0px 0.9215261936187744px 7.372209548950195px 0px #00000021; 0px 3.6861047744750977px 10px 7.372209548950195px #00000006;',
      },
      maxWidth: {
        '4.5xl': '60rem',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['active'],
      fontSize: ['active'],
    },
  },
  plugins: [],
}
