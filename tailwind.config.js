module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'body': ['League Spartan', 'sans-serif']
    },
    screens: {
			'xs': '460px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},

    extend: {
      colors: {
        'light-purple': '#7c5dfa',
        'purple': '#1e2139',
        'dark-purple': '#141625',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
