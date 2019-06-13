import React, { Component } from "react";
import classes from "./Post.css";

class Post extends Component {
  render() {
    return (
      <div className={classes.Post}>
        <h2>Title</h2>
        <p className={classes.Author}>Author</p>
      </div>
    );
  }
}

export default Post;