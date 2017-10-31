import React from "react";

import { createContainer,
  query} from "@phenomic/preset-react-app/lib/client";

import BlogPost from './blogpost'

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ path: "posts", id: props.params.splat })
}));


export default BlogPostContainer
