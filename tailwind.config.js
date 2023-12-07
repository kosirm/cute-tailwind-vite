import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs'

export default {
  darkMode: 'class',
  plugins: [
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors, // primary, secondary etc
      fonts: pg_fonts,
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
    require('@tailwindcss/forms'),
  ],

  theme: {
    screens: {
      sm: '640px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      boxShadow: {
        rainbow:
          '0 0 0 10px #ff0000,0 0 0 20px #ff7700,0 0 0 30px #FFDD00,0 0 0 40px #00FF00,0 0 0 50px #0000FF,0 0 0 60px #C77DF3,0 0 0 70px #8A2BE2',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      colors: {
        blue: {
          100: '#72c1df',
          200: '#5bb7d9',
          300: '#43add4',
          400: '#2ca2ce',
          500: '#1498c9',
          600: '#1289b5',
          700: '#107aa1',
          800: '#0e6a8d',
          900: '#0c5b79',
        },
        gold: {
          light: '#ddbf5f',
          base: '#d4af37',
          dark: '#aa8c2c',
        },
      },
    },
  },

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  get content() {
    const _content = [
      './index.html',
      './src/**/*.{html,vue,svelte,astro,js,cjs,ts,cts,mts,jsx,tsx,md,mdx}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
