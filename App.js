import React from "react";
import { Router, Route, browserHistory, Link } from "react-router";
import Head from "react-helmet";

import { createApp,
  createContainer,
  query,
  BodyRenderer } from "@phenomic/preset-react-app/lib/client";

const Home = ({ isLoading, posts }) => (
  <div>
    <h1>Home</h1>
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
  </div>
);

const BlogPost = ({ isLoading, page }) => (
  <div>
    {isLoading && "Loading..."}
    {!isLoading &&
    page.node && (
      <article>
        <h1>{page.node.title}</h1>
        <BodyRenderer>{page.node.body}</BodyRenderer>
      </article>
    )}
    <footer>
      <Link to="/">Go to home</Link>
    </footer>
  </div>
);

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ path: "posts", id: props.params.splat })
}));

const HomeContainer = createContainer(Home, props => ({
  posts: query({ path: "posts", limit: 2, after: props.params.after })
}));

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer} />
    <Route path="/after/:after" component={HomeContainer} />
    <Route path="/blog/*" component={BlogPostContainer} />
  </Router>
));
