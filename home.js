import React from "react";
import { Link } from "react-router";
import Head from "react-helmet";
import Layout from './layout'

const Home = ({ isLoading, posts }) => (
  <Layout>
    <Head>
      <title>Asim K T | Front end developer from Bangalore</title>
      <meta name="description" content="Asim K T | Front end developer from Bangalore" />
    </Head>
    <h1>Asim K T</h1>
    <p>Front end developer from Bangalore</p>
    {isLoading && "Loading..."}
    {!isLoading && (
      <div>
        <ul>
          {posts &&
            posts.node &&
            posts.node.list &&
            posts.node.list.map(post => (
              <li key={post.id}>
                <Link to={`/blog/${post.id}/`}>{post.title || post.id}</Link>
              </li>
            ))}
        </ul>
        <div>
          {posts.node &&
          posts.node.hasNextPage && (
            <Link to={`/after/${posts.node.next}/`}>Older posts</Link>
          )}
        </div>
        <div>
          {posts.node &&
          posts.node.hasPreviousPage && (
            <Link to={posts.node.previousPageIsFirst ? `/` : `/after/${posts.node.previous}/`}>
              Newer posts
            </Link>
          )}
        </div>
      </div>
    )}
  </Layout>
);

export default Home;
