import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class View extends Component {
  render() {
    const { posts } = this.props;
    const postList =
      posts &&
      posts.map(post => {
        //console.log(post.id);
        return (
          <div key={post.id} className="card z-depth-5">
            <div className="card-content">
              <div className="card-title">
                <span>{post.title}</span>
              </div>
              <div className="card-body">
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        );
      });
    return (
      <div className="post-list container z-depth-5 white">
        <h3 className="grey-text center">Recent Posts</h3>
        <div className="posts">{postList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.firestore.data);
  return {
    //posts: state.post.posts
    posts: state.firestore.ordered.posts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(View);
