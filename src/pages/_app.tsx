import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
