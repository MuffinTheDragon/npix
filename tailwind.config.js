/** @type {import('tailwindcss').Config} */
module.exports = {
  // all ts and tsx files
  content: ["./lib/**/*.ts", "./lib/**/*.tsx", "./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          focus: "hsl(var(--primary-focus))",
          border: "hsl(var(--primary-border))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          focus: "hsl(var(--secondary-focus))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          border: "hsl(var(--danger-border))",
          focus: "hsl(var(--danger-focus))",
          foreground: "hsl(var(--danger-foreground))",
        },
        success: {
          border: "hsl(var(--success-border))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          border: "hsl(var(--warning-border))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          border: "hsl(var(--info-border))",
          foreground: "hsl(var(--info-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foregroundasdasdasd))",
        },
      },
    },
  },
  plugins: [],
};
