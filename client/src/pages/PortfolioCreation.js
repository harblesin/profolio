import React, { Component } from "react";
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
} from "../components/Footer/Footer";
import Template1 from "./Template1";
import ProjectCard from "../components/SubComponents/ProjectCard/ProjectCard";

class PortfolioCreation extends Component {
  state = {
    fullName: "Full Name",
    aboutMe: "About Me",
    contactNumber: "Phone Number",
    projectTitle: "Project Title",
    aboutProject: "About Project",
    githubLink: "Github Link",
    deployedLink: "Deployed Link",
    footer: 0,
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  nextClick = () => {
    let footer = this.state.footer;
    footer += 1;
    this.setState({
      footer,
    });
    this.handleFooterChange();
    console.log(this.state.footer);
  };

  previousClick = () => {
    let footer = this.state.footer;
    footer -= 1;
    this.setState({
      footer,
    });
    this.handleFooterChange();
    console.log(this.state.footer);
  };

  // addProjectClick = () => {
  // };

  handleFooterChange = () => {
    if (this.state.footer === 0) {
      return (
        <Footer1 onChange={this.handleInputChange} nextClick={this.nextClick} />
      );
    }
    if (this.state.footer === 1) {
      return (
        <Footer2
          onChange={this.handleInputChange}
          nextClick={this.nextClick}
          previousClick={this.previousClick}
          addProjectClick={this.addProjectClick}
        />
      );
    }
    if (this.state.footer === 2) {
      return (
        <Footer3
          onChange={this.handleInputChange}
          nextClick={this.nextClick}
          previousClick={this.previousClick}
        />
      );
    }
    if (this.state.footer === 3) {
      return (
        <Footer4
          onChange={this.handleInputChange}
          nextClick={this.nextClick}
          previousClick={this.previousClick}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <Template1 {...this.state} />

        {this.state.footer}
        {this.handleFooterChange()}
        {console.log(this.state.footer)}
      </div>
    );
  }
}

export default PortfolioCreation;
