/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#fafaf6',
        'paper-tint': '#f3f2eb',
        'paper-deep': '#ebe9dd',
        ink: '#0e0e12',
        'ink-strong': '#000000',
        'ink-muted': '#5b5b62',
        'ink-faint': '#9a9aa3',
        rule: '#d6d4c9',
        'rule-strong': '#a8a59a',
        prussian: '#1d3a5f',
        'prussian-deep': '#102540',
        oxide: '#b65a1c',
        marker: '#fdebab',
      },
      fontFamily: {
        display: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '0.18em',
      },
    },
  },
  plugins: [],
};
