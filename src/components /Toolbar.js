import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Toolbar extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/">GO TO HOMEPAGE</Link>
        </p>
        <p>
          <Link to="/developers">Check out developers List</Link>
        </p>
        <p>
          <Link to="/login">Login Page</Link>
        </p>
      </div>
    );
  }
}
