import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API"
import Button from "../SubComponents/Button/Button";
import Form from "../SubComponents/Form/Form";
import LargeLogo from "../SubComponents/Logo/LargeLogo";
import { Row, Col, Container } from "react-bootstrap";

class LandingPage1 extends Component {

  state = {
    email: "",
    password: "",
    redirect: false
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/usersplash' />
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  login = event => {
    event.preventDefault();
    console.log(this.state.email)
    if (this.state.email && this.state.password) {
      let userInfo = {
        email: this.state.email,
        password: this.state.password
      }
      console.log(userInfo)
      API.loginUser(userInfo).then(() => {
        alert("Welcome back " + this.state.email + "!")
        this.setState({ redirect: true })
      });
    } else {
      alert("Must enter both a username and password")
    }
  };

  componentDidMount() {
    API.authCheck().then((data) => {
      console.log("here i am")
      console.log(data)
      this.setState({ redirect: true })

    })
  }

  render() {
    return (
      <Container fluid={true} className="backgroundHead test">
        <Row>
          <LargeLogo />
        </Row>
        <br />
        <Row>
          <Col className="loginBox">
            <h3>Login</h3>
            <div className="rounded m-auto rounded-lg">
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
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <Button
                text="Login"
                type="button"
                onClick={this.login}
                className="float-right medium teal btn"
              />
              {this.renderRedirect()}
            </div>
            <br />
            <br />
            <div>
              <div className="card mx-auto align-self-center borderSplash backG rounded">
                <div className="card-body font-weight-bold p-1">
                  <p className="font-weight-bold">If you're a new user click on the button below for a
                                    <span className="font-weight-bolder"> FREE</span> user account.</p>
                  <Button
                    text="New User?"
                    type="button"
                    href="/newuser"
                    onClick={() => { }}
                    className="float-left medium btn-dark btn"
                  />
                </div>
              </div>

            </div>
          </Col>
          <Col xl={7} lg={6} md={5}>
            <h1 className="text-center">What we are about!</h1>
            <div className="card mx-auto w-75 align-self-center borderSplash backG rounded">
              <div className="card-body font-weight-bold">
                <p> Here on PROFolio we provide a <span className="font-weight-bolder"> FREE</span> service to all developers searching for a place to create a
                    portfolio. With multiple templates to choose from we are sure one will match your tastes. With an expanding community of
                    like minded developers there are continuous updates and new templates to choose from all the time. We will take you
                    step by step on creating your one of a kind portfolio with our easy creation page. Once you have completed creating
                    the profile you like it will be hosted and a link will be provided to you so you can share it with others. So what
                                    are you waiting for, sign up today!</p>
              </div>
            </div>
          </Col>
          <Col className="">
            <h4 className="text-center">Whats new!</h4>
            <div className="card mx-auto align-self-center borderSplash backG rounded">
              <div className="card-body font-weight-bold p-1">
                <ul>
                  <li>WEB SITE LAUNCH</li>
                  <li>Template 1 Released</li>
                  <li>Template 2 Released</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container >
    );
  }

}

export default LandingPage1;
