import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        yang: ["Lora", "serif"], // or 'Playfair Display', 'Crimson Text'
      },
    },
  },
  plugins: [],
} satisfies Config;
