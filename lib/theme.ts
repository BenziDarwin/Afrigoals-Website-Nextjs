export const theme = {
  colors: {
    primary: {
      50: "#e6f8fd",
      100: "#b3e9f9",
      200: "#80dbf5",
      300: "#4dcdf1",
      400: "#1abfed",
      500: "#0DA4EA",
      600: "#0a83bb",
      700: "#08628c",
      800: "#05425e",
      900: "#03212f",
    },
    secondary: {
      50: "#fff4e6",
      100: "#ffddb3",
      200: "#ffc680",
      300: "#ffaf4d",
      400: "#ff981a",
      500: "#e68200",
      600: "#b36500",
      700: "#804800",
      800: "#4d2b00",
      900: "#1a0e00",
    },
    neutral: {
      50: "#f8f9fa",
      100: "#e9ecef",
      200: "#dee2e6",
      300: "#ced4da",
      400: "#adb5bd",
      500: "#6c757d",
      600: "#495057",
      700: "#343a40",
      800: "#212529",
      900: "#0d1117",
    },
    success: {
      light: "#10b981",
      DEFAULT: "#059669",
      dark: "#047857",
    },
    error: {
      light: "#ef4444",
      DEFAULT: "#dc2626",
      dark: "#b91c1c",
    },
    warning: {
      light: "#f59e0b",
      DEFAULT: "#d97706",
      dark: "#b45309",
    },
  },

  gradients: {
    primary: "linear-gradient(135deg, #0DA4EA 0%, #0a83bb 100%)",
    hero: "linear-gradient(135deg, #05425e 0%, #0DA4EA 50%, #1abfed 100%)",
    card: "linear-gradient(145deg, rgba(13,164,234,0.05) 0%, rgba(13,164,234,0.02) 100%)",
    overlay: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
    sidebar: "linear-gradient(180deg, #0DA4EA 0%, #0a83bb 100%)",
  },

  spacing: {
    section: {
      sm: "4rem",
      md: "6rem",
      lg: "8rem",
      xl: "10rem",
    },
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  typography: {
    fonts: {
      heading: "var(--font-sans)",
      body: "var(--font-sans)",
    },
    sizes: {
      hero: "clamp(2.5rem, 5vw, 4rem)",
      h1: "clamp(2rem, 4vw, 3rem)",
      h2: "clamp(1.5rem, 3vw, 2.25rem)",
      h3: "clamp(1.25rem, 2vw, 1.75rem)",
      h4: "clamp(1.125rem, 1.5vw, 1.5rem)",
      body: "1rem",
      small: "0.875rem",
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  effects: {
    shadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      glow: "0 0 20px rgba(13, 164, 234, 0.4)",
    },
    blur: {
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
    },
    transition: {
      fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
      DEFAULT: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
      slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  borderRadius: {
    sm: "0.25rem",
    DEFAULT: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export type Theme = typeof theme;
