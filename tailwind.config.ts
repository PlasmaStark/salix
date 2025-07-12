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
        accent3: "var(--color-accent3)",
        accent4: "var(--color-accent4)",
        accent5: "var(--color-accent5)",
        accent6: "var(--color-accent6)",
      },
      borderWidth: {
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },
      opacity: {
        '60': '0.60',
      },
      scale: {
        '101': '101',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;

