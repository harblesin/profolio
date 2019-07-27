import React, { Component } from "react";
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4
} from "../components/Footer/Footer";
import Template1 from "./Template1";
import ProjectCard from "../components/SubComponents/ProjectCard/ProjectCard";
import axios from "axios";
import API from "../utils/API";

class PortfolioCreation extends Component {
  state = {
    fullName: "Full Name",
    aboutMe: "About Me",
    contactNumber: "Phone Number",
    projectTitle: "Project Title",
    aboutProject: "About Project",
    githubLink: "Github Project Link",
    deployedLink: "Deployed Project Link",
    footer: 0,
    baseImage: "images/profile-pic-placeholder.png",
    projectPicture: "images/project-placeholder.png",
    linkedInLink: "LinkedIn Link",
    githubProfileLink: "Github Profile Link"
  };

  componentDidMount = () => {
    let object = {
      profolioId: 77
    };
    API.getBio(object).then(response => {
      console.log(response.data);
      if (response.data) {
        if (response.data.photo && response.data.photo !== "") {
          let bioPic = response.data.photo;
          this.setState({
            baseImage: bioPic
          });
        }
        if (response.data.fullName && response.data.fullName !== "") {
          let name = response.data.fullName;
          this.setState({
            fullName: name
          });
        }
        if (response.data.aboutMe && response.data.aboutMe !== "") {
          let about = response.data.aboutMe;
          this.setState({
            aboutMe: about
          });
        }
      }
    });
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  getBaseFile = files => {
    this.setState({
      baseImage: files.base64
    });
  };

  getBaseFileProjectPic = files => {
    this.setState({
      projectPicture: files.base64
    });
  };

  nextClick = () => {
    let footer = this.state.footer;
    let object = {};
    switch (footer) {
      case 0:
        object = {
          fullName: this.state.fullName,
          aboutMe: this.state.aboutMe,
          photo: this.state.baseImage.toString()
        };
        API.saveBio(object);
        break;
      case 1:
        object = {};
        break;
      case 2:
        object = {};
        break;
      case 3:
        object = {};
        break;
      default:
    }

    footer += 1;
    this.setState({
      footer
    });
    this.handleFooterChange();
    console.log(this.state.footer);
  };

  previousClick = () => {
    let footer = this.state.footer;
    footer -= 1;
    this.setState({
      footer
    });
    this.handleFooterChange();
    console.log(this.state.footer);
  };

  addProjectClick = props => {
    // let children = this.state.children
    // this.setState({
    //   children: [...children, <ProjectCard {...props} />]
    // })
  };

  handleFooterChange = () => {
    if (this.state.footer === 0) {
      return (
        <Footer1
          onChange={this.handleInputChange}
          nextClick={this.nextClick}
          getBaseFile={this.getBaseFile}
        />
      );
    }
    if (this.state.footer === 1) {
      return (
        <Footer2
          onChange={this.handleInputChange}
          nextClick={this.nextClick}
          previousClick={this.previousClick}
        />
      );
    }
    if (this.state.footer === 2) {
      return (
        <Footer3
          onChange={this.handleInputChange}
          nextClick={this.nextClick}
          previousClick={this.previousClick}
          addProjectClick={this.addProjectClick}
          getBaseFileProjectPic={this.getBaseFileProjectPic}
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
