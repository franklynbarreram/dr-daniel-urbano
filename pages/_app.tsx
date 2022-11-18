import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2e2e2e" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
