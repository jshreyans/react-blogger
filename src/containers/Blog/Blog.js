import React, { Component } from "react";
import axios from "axios";

import classes from "./Blog.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(result => {
        // console.log(result);
        this.setState({ posts: result.data });
        console.log("Connected!");
      })
      .catch(err => {
        console.log(err);
        console.log("Error encountered");
      });
  }

  render() {
    const posts = this.state.posts.slice(0, 5).map(post => {
      return <Post title={post.title} key={post.id} />;
    });

    return (
      <div className={classes.Blog}>
        <section className={classes.Posts}>{posts}</section>
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
