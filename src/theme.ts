import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#05b362",
    primaryHover: "#01783e",
    secondary: "#e4e4e7",
    border: "#404040",
    text: "#e4e4e7",
    mutedText: "#CCCCCC",
    lightText: "#888888",
    progressBackground: "#e4e4e7",
    progressFill: "#00FF88",
    background:"#181818"
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: `'Fira Code', monospace`,
  },
  fontSizes: {
    heading: "2rem",
    body: "1rem",
    caption: "0.875rem",
  },
  radii: {
    base: "8px",
    round: "999px",
  },
};
