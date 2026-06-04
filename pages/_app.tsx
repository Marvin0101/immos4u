import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@fontsource-variable/inter/standard.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>immos4u</title>
        <meta name="description" content="Immobilien für dich" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi"></meta> */}
        <meta property="og:url" content="https://immos4u.eu" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="immos4u - Immobilien für dich" />
        <meta property="og:description" content="Immobilien, Hausmeisterservice und mehr." />
        <meta property="og:image" content="/immo.png" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <ThemeProvider theme={darkTheme}>
      <main id="site-container">
        <Header />
        <div id="page-container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
      </ThemeProvider>
    </>
  );
}
