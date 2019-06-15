import React, { Component } from "react";
import axios from "axios";

import classes from "./Blog.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  showPostHandler = id => {
    this.setState({ selectedPostId: id });
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
        this.setState({error: true})
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Somethign went wrong!</p>;
    // posts = this.state.posts.map(post => {
    //   return (
    //     <Post
    //       title={post.title}
    //       author={post.author}
    //       key={post.id}
    //       clicked={() => {
    //         this.showPostHandler(post.id);
    //       }}
    //     />
    //   );
    // });
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

    return (
      <div className={classes.Blog}>
        <section className={classes.Posts}>{posts}</section>
        <section className={classes.FullPost}>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section className={classes.NewPost}>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
