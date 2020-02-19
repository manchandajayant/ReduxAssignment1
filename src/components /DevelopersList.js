import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDevelopers } from "../store/developers/actions";

class Developerslist extends Component {
  state = {
    developers: []
  };
  componentDidMount() {
    this.props.dispatch(fetchDevelopers);
    console.log(this.state.fetchDevelopers);
  }

  render() {
    console.log(this.props.posts.comments);
    return (
      <div>
        Number of Developers {this.props.developers.length};
        <ul>
          {this.props.developers.map(dev => {
            return (
              <li>
                {dev.name} ({dev.email})
              </li>
            );
          })}
        </ul>
        <p>Posts {this.props.posts.post}</p>
        <ul>
          Comments
          {this.props.posts.comments.map(pos => {
            return <li>{pos.comments}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    developers: reduxState.developers,
    posts: reduxState.posts,
    comments: reduxState.comments
  };
}

export default connect(mapStateToProps)(Developerslist);
