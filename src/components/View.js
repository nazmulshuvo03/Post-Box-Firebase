import React, { Component } from "react";
import { connect } from "react-redux";

class View extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
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
      })
    ) : (
      <div>
        <h3>No posts yet</h3>
      </div>
    );
    return (
      <div className="post-list container z-depth-5 white">
        <h3 className="grey-text text-darken-1 center">Recent Posts</h3>
        <div className="posts">{postList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(View);
