module.exports = {
  purge: {
    content: [ // mudando para poder carregar na versão de produção e entender a interpolação de classes
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [ // mudando para poder carregar na versão de produção e entender a interpolação de classes
      /^bg-/,
      /^to-/,
      /^from-/,
      /^hover:/,
    ]
  },
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }