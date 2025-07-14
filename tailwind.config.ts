import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

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
      },
      typography: {
  DEFAULT: {
    css: {
      table: {
        width: '100%',
        marginTop: '1.5em',
        marginBottom: '1.5em',
        borderCollapse: 'collapse',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        fontSize: '0.95rem',
      },
      thead: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
      },
      'thead th': {
        padding: '0.75em 1em',
        fontWeight: '600',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
      },
      'tbody tr:nth-child(odd)': {
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
      },
      'tbody tr:nth-child(even)': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
      },
      'tbody td': {
        padding: '0.6em 1em',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        textAlign: 'left',
      },
    },
  },
  invert: {
    css: {
      table: {
        width: '100%',
        borderCollapse: 'collapse',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        fontSize: '0.95rem',
      },
      thead: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      },
      'thead th': {
        padding: '0.75em 1em',
        fontWeight: '600',
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        textAlign: 'left',
      },
      'tbody tr:nth-child(odd)': {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
      },
      'tbody tr:nth-child(even)': {
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
      },
      'tbody td': {
        padding: '0.6em 1em',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'left',
      },
    },
  },
},

    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
