import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--color-accent)",
        accent2: "var(--color-accent2)",
      },
      borderWidth: {
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },
      opacity: {
        '60': '0.60',
      }

    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
