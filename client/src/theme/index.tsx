import React from 'react';
import { Theme, ThemeProvider } from '@emotion/react';
import light from './light';

const defaultValue: Theme = {
  ...light,
};

/** Theme component props */
type Props = {
  children: React.ReactNode;
};

const AppThemeProvider: React.FC<Props> = ({ children }: Props) => {
  return <ThemeProvider theme={defaultValue}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
