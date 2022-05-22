import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      readonly fontBlack: string;
      readonly fontWhite: string;
      readonly fontDark: string;

      readonly blue: string;
      readonly darkBlue: string;
      readonly opaqueBlue: string;
      readonly deepDarkBlue: string;
      readonly white: string;
    };
    font: {
      readonly regularFont: string;
    };
  }
}
