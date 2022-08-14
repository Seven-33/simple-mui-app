import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { cyan, green } from '@mui/material/colors';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontSize: 16,
      button: {
        textTransform: 'none',
      },
    },
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: cyan[300],
      },
    },
  })
);

const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
