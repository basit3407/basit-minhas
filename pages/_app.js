import { useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS (For Material ui to work)
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Basit Minhas | Programmer</title>
        <link rel="icon" href="favicon.ico" />
        {/* Google fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Montserrat:wght@100&family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};

export default MyApp;
