import React, { Component } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import { Container } from "../components/Grid/Grid";
import LargeLogo from "../components/SubComponents/Logo/LargeLogo";

class About extends Component {
  render() {
    return (
      <div className="backG">
        <LargeLogo />
        <br />
        <br />
        <div>
          <h1 className="text-center">Meet the Team</h1>
        </div>
        <br />
        <br />
        <Container fluid>
          <AboutUs />
        </Container>
      </div>
    );
  }
}

export default About;
