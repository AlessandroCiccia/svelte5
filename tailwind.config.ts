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
        primary: {
          DEFAULT: "#243882", // Esempio colore
          accent: "#3F68FF",
          black: "#1E1E1E",
          white: "#FFFFFF",
          lightBlue: "#D1E2F1",
        },
        secondary: {
          greyBlue: "#495783",
          orange: "#FF5731",
          violet: "#9B76FF",
          excluweb: "#D62054",
        },
        background: {
          DEFAULT: "#D1E2F1",
        },
        neutral: {
          700: "#1F1F1F",
          600: "#4B4B4B",
          550: "#686868",
          500: "#8E8E8E",
          400: "#CACACA",
          300: "#E1E1E1",
          200: "#EEEEEE",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
        danger: {
          700: "#EC2D30",
          600: "#F64C4C",
          500: "#EB6F70",
          400: "#F49898",
          300: "#FFCCD2",
          200: "#FFEBEE",
          100: "#FEF2F2",
        },
        warning: {
          700: "#FE9B0E",
          600: "#FFAD0D",
          500: "#FFC62B",
          400: "#FFDD82",
          300: "#FFEAB3",
          200: "#FFF7E1",
          100: "#FFF9EE",
        },
        success: {
          700: "#0D8553",
          600: "#32A978",
          500: "#6BC497",
          400: "#97D4B4",
          300: "#C0E5D1",
          200: "#E5F5EC",
          100: "#F2FAF6",
        },
        foreground: "#FFFF",
        border: "hsl(var(--border) / <alpha-value>)", //? DA RICONTROLLARE
        input: "hsl(var(--input) / <alpha-value>)", //? DA RICONTROLLARE
        ring: "hsl(var(--ring) / <alpha-value>)", //? DA RICONTROLLARE
      },
      borderRadius: {
        lg: "var(--radius)", //? DA RICONTROLLARE
        md: "calc(var(--radius) - 2px)", //? DA RICONTROLLARE
        sm: "calc(var(--radius) - 4px)", //? DA RICONTROLLARE
      },
      fontFamily: {
        regular: ["Chillax-Regular", "sans-serif"],
        medium: ["Chillax-Medium", "sans-serif"],
        semibold: ["Chillax-Semibold", "sans-serif"],
        bold: ["Chillax-Bold", "sans-serif"],
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const sizes = ["xxs", "xs", "sm", "md", "xl"]; // Definisci le taglie
      const weights = ["regular", "medium", "semibold", "bold"]; // Definisci i pesi

      weights.forEach((weight) => {
        sizes.forEach((size) => {
          newUtilities[`.${weight}-${size}`] = {
            fontFamily: theme(`fontFamily.${weight}`),
            fontSize: theme(`fontSize.${size}`),
          };
        });
      });

      addUtilities(newUtilities);
    },
  ],
};

export default config;
