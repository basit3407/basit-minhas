import Head from "next/head";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
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
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape({}),
};

export default MyApp;
