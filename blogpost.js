import React from "react";
import { Link } from "react-router";
import Head from "react-helmet";
import Layout from './layout'


import { BodyRenderer,
  textRenderer } from "@phenomic/preset-react-app/lib/client";

const BlogPost = ({ isLoading, page }) => (
  <Layout>
    {isLoading && "Loading..."}
    {!isLoading &&
    page.node && (
      <article>
        <Head>
          <title>{page.node.title}</title>
          <meta
            name="description"
            content={textRenderer(page.node.body).slice(0, 150) + "…"}
          />
        </Head>
        <h1>{page.node.title}</h1>
        <BodyRenderer>{page.node.body}</BodyRenderer>
      </article>
    )}
    <footer>
      <Link to="/">Go to front page</Link>
    </footer>
  </Layout>
);

export default BlogPost
