import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      section: string;
      action: string;
      font: string;
      error: string;
    };
  }
}
