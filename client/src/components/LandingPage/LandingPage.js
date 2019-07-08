<<<<<<< HEAD:client/src/components/LandingPage/LandingPage.js
import React from "react";

function LandingPage() {
  return (
    <div>
      <h1 className="jumbotron">PROFOLIO</h1>
    </div>
  );
=======
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
>>>>>>> 16f5943ca3b1459ee8202171e63dad1a4b852630:client/src/components/Main.js
}

export default LandingPage;
