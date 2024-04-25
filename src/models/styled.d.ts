import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      section: string;
      action: string;
      font: string;
      error: string;
    };

    fonts: {
      small: string;
      medium: string;
      larger: string;
    };
  }
}
