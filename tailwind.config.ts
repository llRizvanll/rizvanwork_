module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: '#FF385C',
          dark: '#222222',
          light: '#717171',
          grey: '#DDDDDD',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        cereal: ['Cereal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}