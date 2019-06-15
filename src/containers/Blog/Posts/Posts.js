import React, { Component } from "react";
import axios from "axios";

import classes from "../../Blog/Blog.css";
import Post from "../../../components/Post/Post";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(result => {
        const posts = result.data.slice(0, 5);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        // console.log(result);
        this.setState({ posts: updatedPosts });
        console.log("Connected!");
      })
      .catch(err => {
        console.log(err);
        console.log("Error encountered");
        // this.setState({ error: true });
      });
  }

  showPostHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Somethign went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            title={post.title}
            author={post.author}
            key={post.id}
            clicked={() => {
              this.showPostHandler(post.id);
            }}
          />
        );
      });
    }
    return <section className={classes.Posts}>{posts}</section>;
  }
}

export default Posts;
