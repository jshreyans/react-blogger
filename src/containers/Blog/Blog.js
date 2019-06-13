import React, { Component } from "react";

import classes from "./Blog.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <section className={classes.Posts}>
          <Post />
          <Post />
          <Post />
        </section>
        <section className={classes.FullPost}>
          <FullPost />
        </section>
        <section className={classes.NewPost}>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
