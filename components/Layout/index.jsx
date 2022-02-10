import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="graphic design, graphic designer, graphic design pa, designer, graphic, graphic designer pa"
        />
        <meta
          name="description"
          content="a graphic designer in PA with over 22 years of experience"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
          rel="stylesheet"
        />
        <title>Special Forces Art Department</title>
      </Head>
      <div className={styles.body}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
