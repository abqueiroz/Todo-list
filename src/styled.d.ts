// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      border: string;
      text: string;
      mutedText: string;
      lightText: string;
      progressBackground: string;
      progressFill: string;
      secondary: string;
      backgorund: string;
    };
    fonts: {
      heading: string;
      body: string;
      mono: string;
    };
    fontSizes: {
      heading: string;
      body: string;
      caption: string;
    };
    radii: {
      base: string;
      round: string;
    };
  }
}
