import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Form from "../SubComponents/Form/Form";
import Button from "../SubComponents/Button/Button";
import LargeLogo from "../SubComponents/Logo/LargeLogo";
import API from "../../utils/API";

class NewUser extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirm: "",
    redirect: false
  };

  renderRedirect = () => {
    if(this.state.redirect){
      return <Redirect to ='/' />
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  register = event => {
    event.preventDefault();
    if (this.state.email && this.state.password && this.state.passwordConfirm) {
      if (this.state.password === this.state.passwordConfirm) {
        let userInfo = {
          email: this.state.email,
          password: this.state.password
        };

        API.saveUser(userInfo).then(() => {
          alert("Welcome " + this.state.email + "!");
          
          this.setState({redirect:true})
          this.renderRedirect()
        });
      } else {
        alert("Passwords do not match!");
      }
    } else {
      alert("Please fill out all fields!");
    }
  };

  render() {
    return (
      <div>
        <div className="backG">
          <LargeLogo />
          <br />
          <div className="rounded w-25 m-auto rounded-lg">
            <div>
              <Form
                className="opacity form-control border border-dark"
                id="userName"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
              <Form
                className="opacity form-control border border-dark"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleInputChange}
              />
              <Form
                className="opacity form-control border border-dark"
                id="userName"
                name="passwordConfirm"
                placeholder="Confirm Password"
                type="password"
                onChange={this.handleInputChange}
              />
              <Button
                text="Sign Up"
                type="button"
                onClick={this.register}
                className="float-right medium teal btn"
              />
              {this.renderRedirect()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser;
