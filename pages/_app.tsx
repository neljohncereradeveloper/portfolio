import type { AppProps } from "next/app";
import Head from "next/head";
// import Layout from "../src/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* if not set overflow x will show in the page */}
        {/* note: this must be set in app.js ref: https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
