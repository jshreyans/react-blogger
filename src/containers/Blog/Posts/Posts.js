import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import classes from "../../Blog/Blog.css";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

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
    this.props.history.push("/posts/" + id);
    console.log("Post clicked");
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={"/posts/" + post.id} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            key={post.id}
            clicked={() => {
              this.showPostHandler(post.id);
            }}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
