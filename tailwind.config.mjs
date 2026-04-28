/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#f3ecde',
        'paper-shade': '#ebe0c9',
        'paper-deep': '#e3d6ba',
        ink: '#1a1612',
        'ink-muted': '#6e6453',
        'ink-faint': '#a89c87',
        rule: '#d4c5a8',
        'rule-strong': '#bba887',
        oxide: '#9c2a18',
        'oxide-deep': '#7a1f10',
        marker: '#c8a548',
        'marker-soft': '#e7d4a0',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['"Newsreader"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
    },
  },
  plugins: [],
};
