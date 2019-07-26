import React, { Component } from "react";
import Button from "../components/SubComponents/Button/Button";
import Form from "../components/SubComponents/Form/Form";
import API from "../utils/API";

class Test extends Component {
  state = {
    firstName: "",
    lastName: "",
    title: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  test = event => {
    event.preventDefault();
    console.log(this.state.email);

    let userInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title
    };
    console.log(userInfo);
    API.loginUser(userInfo).then(() => {
      alert("Welcome back " + this.state.email + "!");
      this.setState({ redirect: true });
    });
  };

  render() {
    return (
      <div>
        <Form name="firstName" />
        <Form name="lastName" />
        <Form name="title" />
        <Button onClick={this.test} />
      </div>
    );
  }
}

export default Test;
