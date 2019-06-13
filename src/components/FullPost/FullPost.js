import React, { Component } from "react";
import classes from "./FullPost.css";

class FullPost extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p className={classes.Content}>Content</p>
        <div className={classes.Edit}>
          <button className={classes.Delete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default FullPost;
