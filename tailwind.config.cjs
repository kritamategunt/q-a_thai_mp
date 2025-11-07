module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Your custom colors here - they'll be ADDED to default Tailwind colors
        'primary-blue': '#1e5d9c',
        ci: {
          // ...your existing custom colors
        },
        // ...rest of your custom colors
      },
      // ...rest of your extensions
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animated'),
  ],
}