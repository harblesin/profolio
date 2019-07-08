import React, { Component } from "react";
import API from "../../utils/API";

class LandingPage extends Component {
  state = {
    email: "",
    password: "",
    users: []
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

  grabIt = () => {
    API.getUsers({}).then(data => {
      console.log(data);
      this.setState({ users: data });
    });
  };

  componentDidMount() {
    //this.grabIt();
  }

  render() {
    return (
      <div>
        <h1 className="jumbotron">PROFOLIO</h1>
        <div>{this.state.users}</div>
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

export default LandingPage;
