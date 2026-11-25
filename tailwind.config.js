// Builds styles.css from the classes used in index.html.
// Rebuild after changing classes:  npx tailwindcss@3.4.17 -c tailwind.config.js -i src/tailwind.css -o styles.css --minify
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d7e1f0',
          200: '#aec3e1',
          300: '#7f9fd0',
          400: '#4d76ba',
          500: '#2f57a0',
          600: '#204380',
          700: '#1a3567',
          800: '#152a52',
          900: '#0f1e3d',
          950: '#0a1529'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Inter', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  }
}
