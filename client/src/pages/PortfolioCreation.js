import React, { Component } from "react";
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
} from "../components/Footer/Footer";
import Template1 from "./Template1";

class PortfolioCreation extends Component {
  state = {
    fullName: "Full Name",
    aboutMe: "About Me",
    contactNumber: "Phone Number",
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Template1 {...this.state} />

        <Footer1 onChange={this.handleInputChange} type="text" />
        {/* <Footer2 onChange={this.handleInputChange} type="text" /> */}
        {/* <Footer3 onChange={this.handleInputChange} type="text" /> */}
        {/* <Footer4 onChange={this.handleInputChange} type="text" /> */}
      </div>
    );
  }
}

export default PortfolioCreation;
