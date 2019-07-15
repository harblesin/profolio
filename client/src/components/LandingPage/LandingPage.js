import React from "react";
import { Row, Container } from "../Grid/Grid";
import DropDownNavbar from "../SubComponents/DropDownNavbar/DropDownNavbar";
import React, { Component } from "react";
import API from "../../utils/API";
import Button from "../SubComponents/Button/Button"
import Form from "../SubComponents/Form/Form"
import LargeLogo from "../SubComponents/Logo/LargeLogo"

function LandingPage() {
  return (

  sendIt = () => {
    API.saveUser({
      email: this.state.email,
      password: this.state.password
    }).then(data => {
      console.log(data);
    });
  };

  grabIt = () => {
    API.getUsers().then(data => {
      console.log(data);
      this.setState({ users: data.data });
    });
  };

  componentDidMount() {
    this.grabIt();
  }

  render() {
    return (
      <div className="backG">
        <LargeLogo />
        <br/>
        <div className="card w-25 m-auto silver rounded-lg">
          <div className="card-body">
            <Form
              id="userName"
              placeholder="User"
            />
            <Form
              id="password"
              placeholder="Password"
            />
            <Button
            text="New User?"
            type="button"
            onClick={() => { }}
            className="float-left medium danger btn"
            />
            <Button
              text="Login"
              type="button"
              onClick={() => { }}
              className="float-right medium primary btn"
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default LandingPage;
