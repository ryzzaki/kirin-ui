const genSizes = () => {
  const generatedSizes = {};
  for (let i = 1; i <= 1500; ) {
    generatedSizes[i] = `${i}px`;
    if (i <= 200) {
      generatedSizes[`${i}rem`] = `${i}rem`;
    }
    i += 1;
    if (i > 110 && i < 225) i += 4;
    if (i > 225) i += 24;
  }
  return generatedSizes;
};

const genScales = () => {
  const generatedScales = {};
  for (let i = 1; i <= 200; i++) {
    generatedScales[i] = `${i / 100}`;
  }
  return generatedScales;
};

const sizes = genSizes();

const scales = genScales();

const insets = {
  '1/1': '100%',
  '1/2': '50%',
  '1/3': '33%',
  '2/3': '66%',
  '5px': '5px',
  '10px': '10px',
  '-1': '-1rem',
  '-2': '-2rem',
  '-3': '-3rem',
  '-4': '-4rem',
  '-5': '-5rem',
  1: '1rem',
  2: '2rem',
  3: '3rem',
  4: '4rem',
  5: '5rem',
};

const flex = {
  1: '1',
  2: '2',
  auto: 'auto',
};

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1980px',
    },
    scale: scales,
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      red: '#ef798a',
      orange: '#ffd100',
      offwhite: '#edf2f6',
      darkgrey: '#2d2d2d',
      lightgrey: '#95949c',
      verylightgrey: '#a7b6c7',
      verylightemerald: '#2bb17c',
      lightemerald: '#249369',
      emerald: '#26b17c',
      darkemerald: '#1e8e64',
      verydarkemerald: '#155f42',
      darkgreen: '#214638',
      lightcobalt: '#2e2e2e',
      cobalt: '#202020',
    },
    fontSize: sizes,
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      main: ['IBMPlexSans', 'sans-serif'],
      heading: ['IBMPlexSansBold', 'sans-serif'],
    },
    extend: {
      spacing: sizes,
      opacity: scales,
      animation: {
        fade: 'fadeOut 200ms ease-in-out',
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      }),
    },
    maxHeight: sizes,
    maxWidth: sizes,
    minWidth: sizes,
    inset: insets,
    flex: flex,
  },
  variants: {
    textColor: ['group-hover', 'hover'],
    opacity: ['group-hover'],
  },
  plugins: [],
};
