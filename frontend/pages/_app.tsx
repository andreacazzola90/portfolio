import '../styles/globals.css'
import GlobalStyle from '../styles/globals.style';
import theme from '../styles/theme';

import { ThemeProvider } from 'styled-components';



function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
