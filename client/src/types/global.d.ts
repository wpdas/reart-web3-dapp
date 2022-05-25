import '@emotion/react';

// Emotion theme
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
      readonly transparentBlue: string;
      readonly white: string;
      readonly purple: string;
    };
    font: {
      readonly regularFont: string;
    };
  }
}

// MetaMask ethereum object inside window object
declare global {
  interface Window {
    ethereum: any;
  }
}

// Png files
declare module '*.png';
