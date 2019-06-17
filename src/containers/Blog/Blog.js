import React, { Component } from "react";
// import axios from "axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import classes from "./Blog.css";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
})

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
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={Posts} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
