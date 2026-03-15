/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        coral: "var(--coral)",
        peach: "var(--peach)",
        lavender: "var(--lavender)",
        mint: "var(--mint)",
        gold: "var(--gold)",
        rose: "var(--rose)",
        ink: "var(--ink)",
        ink2: "var(--ink2)",
        muted: "var(--muted)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
      },
    },
  },
  plugins: [],
}
