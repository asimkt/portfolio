import React from "react";
import Head from "react-helmet";

const Layout = ({ children }) => (
  <div>
    <Head>
      <html lang="en" /> {/* this is valid react-helmet usage! */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header>Portfolio of Asim Kattum Thazha</header>
    <div>{children}</div>
    <footer>Site is develop(ing) with phenomic + react</footer>
  </div>
);

export default Layout;
