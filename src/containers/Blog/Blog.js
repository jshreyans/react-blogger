import React, { Component } from "react";
// import axios from "axios";
import { Route, NavLink, Switch } from "react-router-dom";

import classes from "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/new-post" activeStyle={{ color: "#fa923f" }}>
                  New post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
