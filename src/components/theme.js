import { createMuiTheme } from '@material-ui/core/styles';

 export const theme = createMuiTheme({
  type: 'light',
  palette: {
    primary: {
      light: '#1CB5E0', // 基本の色よりも明るい色
      main: '#1CB5E0', // 基本の色
      dark: '#1CB5E0', // 基本の色よりも暗い色
      contrastText: '#fff', // テキストの色
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

