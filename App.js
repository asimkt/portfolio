import React from "react";
import { Router, Route, browserHistory, Link } from "react-router";
import Head from "react-helmet";

import { createApp,
  createContainer,
  query} from "@phenomic/preset-react-app/lib/client";

import Home from './home'
import BlogPost from './blogpost'

import BlogPostContainer from './blogpost-container'

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
