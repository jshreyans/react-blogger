import React, { Component } from "react";
// import axios from "axios";
import { Route, Link } from "react-router-dom";

import classes from "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "../NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new-post">New post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
