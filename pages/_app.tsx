import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />E
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>CharusatForums</title>
            </Head>

            <Component {...pageProps} />
            <Script src="https://kit.fontawesome.com/db7d425af0.js"></Script>
        </SessionProvider>
    );
}

export default MyApp;
