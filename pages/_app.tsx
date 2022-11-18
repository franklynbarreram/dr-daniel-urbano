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
        <meta name="title" content="Dr. Daniel Urbano" />
        <meta
          name="description"
          content="Especialista en Cirugía de Cerebro y Columna Vertebral"
        />
        <meta
          name="keywords"
          content="Dr,Daniel,Urbano,Daniel Urbano,Dr Daniel Urbano,Neurocirugia,Neurocirujano,San Cristobal,Doctor,Doctor San Cristobal,Neurocirujano en San Cristobal, Doctor Daniel Urbano"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />

        <meta property="og:title" content="Dr. Daniel Urbano" />
        <meta property="og:site_name" content="Dr. Daniel Urbano" />
        <meta
          property="og:description"
          content="Especialista en Cirugía de Cerebro y Columna Vertebral"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/daniel-consultorio.jpg" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
