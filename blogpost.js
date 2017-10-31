import React from "react";
import { Link } from "react-router";
import Head from "react-helmet";
import Layout from './layout'


import { BodyRenderer,
  textRenderer } from "@phenomic/preset-react-app/lib/client";


const DefaultPostLayout = ({ title, body }) => (
  <article>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={textRenderer(body).slice(0, 150) + "…"}
      />
    </Head>
    <h1>{title}</h1>
    <BodyRenderer>{body}</BodyRenderer>
  </article>
);

const HeroPostLayout = ({ title, body }) => (
  <article>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={textRenderer(body).slice(0, 150) + "…"}
      />
    </Head>
    <div style={{ padding: "4rem", background: "pink", color: "#fff" }}>
      <h1>{title}</h1>
    </div>
    <BodyRenderer>{body}</BodyRenderer>
  </article>
);

const PostLayouts = {
  default: DefaultPostLayout,
  hero: HeroPostLayout
};

const BlogPost = ({ isLoading, page }) => {
  const PostLayout =
    (page.node && PostLayouts[page.node.layout]) || PostLayouts.default;
  return (
    <Layout>
      {isLoading && "Loading..."}
      {!isLoading && page.node && <PostLayout {...page.node} />}
      <footer>
        <Link to="/">Go to home</Link>
      </footer>
    </Layout>
  );
};

export default BlogPost
