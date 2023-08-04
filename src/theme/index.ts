import {createTheme} from '@rneui/themed';

const lightColors: Colors = {
  primary: '#92CD28',
  secondary: '#F78914',
  background: '#FFF',
  white: '#FAF9F6',
  black: '#E7E7E8',
  grey0: '#F9F9F9', // Or any other light grey you prefer
  grey1: '#F2F2F2',
  grey2: '#EAEAEA',
  grey3: '#D7D7D7',
  grey4: '#C4C4C4',
  grey5: '#A6A6A6',
  greyOutline: '#B2B2B2', // Use a slightly darker shade for outlines
  searchBg: '#F2F2F2', // Same as grey1 or any other preferred color
  success: '#66BB6A', // For success messages or elements
  warning: '#FFC107', // For warning messages or elements
  error: '#FF4444', // For error messages or elements
  disabled: '#BDBDBD', // For disabled elements
  divider: '#E0E0E0', // For dividing lines or sections
};

const darkColors: Colors = {
  primary: '#92CD28',
  secondary: '#F78914',
  background: '#1E1E1E', // Dark background color
  white: '#FAF9F6',
  black: '#E7E7E8',
  grey0: '#333333', // Or any other dark grey you prefer
  grey1: '#424242',
  grey2: '#505050',
  grey3: '#6B6B6B',
  grey4: '#808080',
  grey5: '#A6A6A6',
  greyOutline: '#B2B2B2',
  searchBg: '#424242', // Same as grey1 or any other preferred color
  success: '#66BB6A',
  warning: '#FFC107',
  error: '#FF4444',
  disabled: '#BDBDBD',
  divider: '#555555', // For dividing lines or sections
};

export const theme = createTheme({
  lightColors,
  darkColors,
  mode: 'light',
});

export interface Theme {
  colors: Colors;
  mode: 'light' | 'dark';
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

interface Colors {
  primary: string;
  secondary: string;
  background: string;
  white: string;
  black: string;
  grey0: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  greyOutline: string;
  searchBg: string;
  success: string;
  warning: string;
  error: string;
  disabled: string;
  divider: string;
}
