import React, { Component } from "react";
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer3Button
} from "../components/Footer/Footer";
import Template1 from "./Template1";
import ReactDOM from 'react-dom'
import ProjectCard from "../components/SubComponents/ProjectCard/ProjectCard";


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
    skills: [],
    skillRemove: [],
    baseImage: "images/profile-pic-placeholder.png",
    projectPicture: "images/project-placeholder.png",
    linkedInLink: "LinkedIn Link",
    githubProfileLink: "Github Profile Link",
    footerTruth: false,
    eachProject: [],
    numProject: 0
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  isChecked = event => {

    let value = event.target.value;

    console.log('This is the value of the checkbox ' + value);

    if (event.target.checked) {
      console.log("TRUE")
      this.checkedTrue(value);
    }
    else {
      console.log("FALSE")
      this.checkedFalse(value);
    };

    // let skills = this.state.skills;

    // skills.push(value);

    // this.setState({skills});

    // console.log(skills);
  };

  checkedTrue = value => {

    let skills = this.state.skills;

    skills.push(value);

    this.setState({skills});

    console.log(skills);
  }

  checkedFalse = value => {
    let skills = this.state.skills;
    let remove = this.state.skillRemove;
    let link = value;

    remove.push(link);
    this.setState({remove});

    skills = skills.filter(link => !remove.includes(link));
    this.setState({skills});
  }

  getBaseFile = files => {
    this.setState({
      baseImage: files.base64,
    });
  };

  getBaseFileProjectPic = files => {
    this.setState({
      projectPicture: files.base64,
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
  };

  addProjectClick = () => {
    let project = this.state.eachProject[this.state.numProject];
    let numProject = this.state.numProject

    project.push( 
      {
        projectTitle: this.state.projectTitle
        // href: this.state.deployedLink,
        // aboutProject: this.state.aboutProject,
        // githubLink: this.state.githubLink,
        // projectPicture: this.state.projectPicture
      }
    )

    this.setState({
      eachProject: project,
      numProject: numProject+1
    });
    console.log(project);

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
          addProjectClick={this.addProjectClick}
          isChecked={this.isChecked}
        />
      );
    }
    if (this.state.footer === 2) {
      if (!this.state.footerTruth) {
        return(
        <Footer3Button />
        )
      } 
      else if (this.state.footerTruth){
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