import React, { Component } from "react";
import API from "../utils/API";

class Main extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  sendIt = () => {
    API.saveUser({
      email: this.state.email,
      password: this.state.password
    }).then(data => {
      console.log(data);
    });
  };

  render() {
    return (
      <div>
        <h1 className="jumbotron">PROFOLIO</h1>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleInput}
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleInput}
        />
        <button className="btn btn-danger" onClick={this.sendIt}>
          Click to Test
        </button>
      </div>
    );
  }
}

export default Main;
