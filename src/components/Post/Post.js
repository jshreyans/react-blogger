import React, { Component } from "react";
import classes from "./Post.css";

class Post extends Component {
  render() {
    return (
      <div className={classes.Post} onClick={this.props.clicked}>
        <h2>{this.props.title}</h2>
        <p className={classes.Author}>{this.props.author}</p>
      </div>
    );
  }
}

export default Post;
