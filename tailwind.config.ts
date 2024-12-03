import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        button: {
          DEFAULT: "#3F68FF",
          hover: "#2755FC",
          "primary-disabled": "#DF353D",
          "md-sm-disabled": "#243882",
          "secondary-disabled": "#243882",
          "md-secondary-disabled": "#EC2D30",
        },
        background: {
          DEFAULT: "#D1E2F1",
          80: "#D1E2F1CC",
          70: "#D1E2F1B2",
          50: "#D1E2F180",
          30: "#D1E2F14D",
          20: "#D1E2F133",
        },
        foreground: "#FFFF",
        neutral: {
          DEFAULT: "#1F1F1F",
          600: "#4B4B4B",
          500: "#8E8E8E",
          400: "#CACACA",
          300: "#E1E1E1",
          200: "#EEEEEE",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
        primary: {
          DEFAULT: "#243882",
          "light-blue": "#D1E2F1",
          black: "#1E1E1E",
          white: "#FFFFFF",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "#3F68FF",
          orange: "#FF5731",
          violet: "#9B76FF",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "#EC2D30",
          600: "#F64C4C",
          500: "#EB6F70",
          400: "#F49898",
          300: "#FFCCD2",
          200: "#FFEBEE",
          100: "#FEF2F2",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "#FE9B0E",
          600: "#FFAD0D",
          500: "#FFC62B",
          400: "#FFDD82",
          300: "#FFEAB3",
          200: "#FFF7E1",
          100: "#FFF9EE",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "#0D8553",
          600: "#32A978",
          500: "#6BC497",
          400: "#97D4B4",
          300: "#C0E5D1",
          200: "#E5F5EC",
          100: "#F2FAF6",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [...fontFamily.sans],
      },
      fontSize: {
        md: "18px",
        sm: "16px",
        xs: "14px",
      },
    },
  },
};

export default config;
