import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider autoDismiss={true} autoDismissTimeout={2000}> 
        <Component {...pageProps} />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default MyApp;
