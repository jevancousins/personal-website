/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        'text-primary': '#ededed',
        'text-muted': '#8a8a8a',
        'accent-red': '#E11D2E',
        'accent-red-hover': '#F43645',
        'border-subtle': '#1f1f1f',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        DEFAULT: '#0a0a0a',
      },
      textColor: {
        DEFAULT: '#ededed',
      },
    },
  },
  plugins: [],
};
