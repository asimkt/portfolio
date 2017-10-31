import React from "react";
import Head from "react-helmet";

import Layout from '../layout'

const PageError = ({ error }) => {
  const status = (error && error.status) || 404;
  const message = error && status !== 404 ? error.statusText : "Page not found";

  return (
    <Layout>
      <Head>
        <title>{message}</title>
      </Head>
      <h1>{message}</h1>
    </Layout>
  );
};

export default PageError
