module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/pages/**/*.js', 
    './src/components/**/*.jsx', 
    './src/pages/**/*.ts', 
    './src/components/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', 'sans-serif']
    },
    theme:{
      textColor: {
        'oceanblue': '#3fe0d0'
      },
    },
    extend: {
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {extend: {
   cursor: ['hover', 'focus'],
   fontSize: ['hover', 'focus'],
   textColor: ['active'],
   textOpacity: ['active'],
   transform: ['hover', 'focus'],
   transitionProperty: ['hover', 'focus'],
   scale: ['hover', 'active'],
   rotate: ['hover', 'active'],
  }},
  plugins: [],
};