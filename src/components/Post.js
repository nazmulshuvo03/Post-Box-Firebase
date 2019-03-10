import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class Post extends Component {
  state = {
    id: "",
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    //this.props.history.push("/");
  };
  render() {
    //console.log(this.props);
    return (
      <div className="container z-depth-5">
        <form className="flow-text" onSubmit={this.handleSubmit}>
          <div className="container">
            <h3 className="grey-text text-darken-1 center">Post Here</h3>
          </div>

          <div className="container input-field">
            <label htmlFor="id" className=" grey-text text-darken-1">
              Post ID:{" "}
            </label>
            <input id="id" type="number" onChange={this.handleChange} />
          </div>

          <div className="container input-field">
            <label htmlFor="title" className=" grey-text text-darken-1">
              Title:{" "}
            </label>
            <input id="title" type="text" onChange={this.handleChange} />
          </div>

          <div className="container materialize-textarea input-field">
            <label htmlFor="content" className=" grey-text text-darken-1">
              Content:{" "}
            </label>
            <input id="content" type="text" onChange={this.handleChange} />
          </div>

          <div className="container input-field center">
            <button className="waves-effect waves-light btn lighten-1 grey darken-2 z-depth-3">
              <i className="fa fa-paper-plane" /> POST
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => {
      dispatch(createPost(post));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Post);
