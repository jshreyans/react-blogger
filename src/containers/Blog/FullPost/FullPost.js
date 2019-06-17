import React, { Component } from "react";
import axios from "axios";
import classes from "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    console.log("Loading full post");
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        axios
          .get(`/posts/${this.props.match.params.id}`)
          .then(response => {
            console.log(response);
            this.setState({ loadedPost: response.data });
          })
          .catch(err => {
            console.log(err);
            console.log("Post could not be fetched!");
          });
      }
    }
  }

  deletePostHandler = () => {
    axios
      .delete(`/posts/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a post</p>;

    if (this.props.match.params.id)
      post = <p style={{ textAlign: "center" }}>Loading ...</p>;

    if (this.state.loadedPost) {
      post = (
        <div className={classes.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p className={classes.Content}>{this.state.loadedPost.body}</p>
          <div className={classes.Edit}>
            <button className={classes.Delete} onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
