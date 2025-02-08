module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      colors: {
        'fb': {
          blue: '#4267B2',
          'blue-light': '#5b7bc3',
          grey: '#898F9C',
          'grey-light': '#a0a4af',
          black: '#000000',
        }
      }
    },
  },
  plugins: [],
}