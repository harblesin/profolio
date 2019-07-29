import React, { Component } from "react";
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer3Button
} from "../components/Footer/Footer";
import Template1 from "./Template1";
import ReactDOM from "react-dom";
import ProjectCard from "../components/SubComponents/ProjectCard/ProjectCard";
import axios from "axios";
import API from "../utils/API";
import { Modal } from "react-bootstrap";
import Form from "../components/SubComponents/Form/Form";
import Button from "../components/SubComponents/Button/Button";
import { Redirect } from "react-router-dom";

class PortfolioCreation extends Component {
  state = {
    profolioId: "",
    fullName: "Full Name",
    aboutMe: "About me.",
    contactNumber: "Phone Number",
    projectTitle: "Project Title",
    aboutProject: "About Project",
    githubLink: "Github Project Link",
    deployedLink: "Deployed Project Link",
    cardButton: "Click on this button to create a new Project Card",
    footer: 0,
    skills: [],
    skillRemove: [],
    baseImage: "images/profile-pic-placeholder.png",
    projectPicture: "images/project-placeholder.png",
    linkedInLink: "LinkedIn Link",
    githubProfileLink: "Github Profile Link",
    userEmail: "Your Email",
    footerTruth: false,
    eachProject: [],
    savedProject: [],
    deleteProjectButton: "Delete Button",
    servedLink: "",
    show: false,
    redirect: false
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  componentDidMount = () => {
    // let array = [
    //   [bio]
    // ];

    API.authCheck().then(data => {
      console.log(data.data);
      if (!data.data.auth || data.data === "No auth token") {
        this.setState({ redirect: true });
      }
    });

    const {
      match: { params }
    } = this.props;

    // API.getUserStuff(${params.id}).then({data: profile})=>{
    console.log(params.id);
    this.setState({ profolioId: params.id });
    // }

    let object = {
      ProfolioId: params.id
    };

    let bioObject = {};
    let contactObject = {};

    // *** GET ENTIRE PORTFOLIO FROM DB ***
    API.getPortfolio(object).then(response => {
      console.log("Response Data: " + response.data);
      let dataToSetState = [];
      if (response.data) {
        console.log(response.data);

        // *** PARSE SKILLS ***
        if (response.data.Skills.length > 0) {
          console.log(response.data.Skills[0].skill);

          let loadedSkills = response.data.Skills[0].skill;
          console.log(loadedSkills.split(","));
          let skillsArray = loadedSkills.split(",");
          let skillsLinks = [];
          for (let i = 0; i < skillsArray.length; i++) {
            skillsLinks.push("./images/template1/" + skillsArray[i] + ".png");
          }
          this.setState({
            skills: skillsLinks
          });
        }

        /////////////////////

        // *** PARSE PROJECTS ***

        let projectCards = [];
        let projectCard = {};

        if (response.data.Projects.length > 0) {
          console.log(response.data.Projects);
          for (let i = 0; i < response.data.Projects.length; i++) {
            projectCard = response.data.Projects[i];
            let projectCardConverted = {
              name: projectCard.name,
              projectPicture: projectCard.thumbnail.toString(),
              deployedLink: projectCard.deployedLink,
              githubLink: projectCard.githubLink,
              aboutProject: projectCard.aboutProject
            };

            projectCards.push(projectCardConverted);
          }
          console.log("ProjectCards: " + JSON.stringify(projectCards));
          this.setState({
            savedProject: projectCards
          });
        }

        /////////////////////

        // *** PARSE BIO AND CONTACT***
        bioObject = {
          table: "Bio",
          object: {
            photo: "baseImage",
            fullName: "fullName",
            aboutMe: "aboutMe"
          }
        };
        contactObject = {
          table: "Contact",
          object: {
            phone: "contactNumber",
            github: "githubProfileLink",
            linkedIn: "linkedInLink"
          }
        };

        function parseData(dataObject) {
          let bioTest = response.data[dataObject.table];
          console.log("bioTest" + JSON.stringify(bioTest));
          let tableSearch = dataObject.table;
          let test = response.data.Bio;
          console.log("tableSearch: " + tableSearch);
          console.log(test);
          let table = response.data[tableSearch];
          console.log("table: " + table);
          if (table && table !== "") {
            console.log(Object.keys(dataObject.object));
            let keyArray = Object.keys(dataObject.object);
            for (let i = 0; i < keyArray.length; i++) {
              let keySet = keyArray[i];
              console.log("Key: " + keySet);
              let valueSet = dataObject.object[keySet];
              console.log("Value: " + valueSet);
              console.log(bioTest[keySet]);
              if (bioTest[keySet] && bioTest[keySet] !== "") {
                dataToSetState.push({ [valueSet]: bioTest[keySet] });
              }
            }
          }
        }
        parseData(bioObject);
        parseData(contactObject);
      }
      console.log(dataToSetState);
      for (let i = 0; i < dataToSetState.length; i++) {
        this.setState(dataToSetState[i]);
      }
    });
  };

  setInitial = initial => {
    let initialKey = initial.key;
    let initialValue = initial.value;
    console.log(initial.key, initial.value);
    this.setState({
      [initialKey]: initialValue
    });
  };

  ////////////////////

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  isChecked = event => {
    let value = event.target.value;

    console.log("This is the value of the checkbox " + value);

    if (event.target.checked) {
      console.log("TRUE");
      this.checkedTrue(value);
    } else {
      console.log("FALSE");
      this.checkedFalse(value);
    }
  };

  checkedTrue = value => {
    let skills = this.state.skills;

    skills.push(value);

    this.setState({ skills });

    console.log(skills);
  };

  checkedFalse = value => {
    let skills = this.state.skills;
    let remove = this.state.skillRemove;
    let link = value;

    remove.push(link);
    this.setState({ remove });

    skills = skills.filter(link => !remove.includes(link));
    this.setState({ skills });
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
          photo: this.state.baseImage.toString(),
          ProfolioId: this.state.profolioId
        };
        API.saveBio(object);
        break;
      case 1:
        let clutteredSkills = this.state.skills;
        console.log(clutteredSkills);
        let cleanSkills = [];
        for (let i = 0; i < clutteredSkills.length; i++) {
          let lastSlash = clutteredSkills[i].lastIndexOf("/");
          let lastDot = clutteredSkills[i].lastIndexOf(".");
          let cleanSkill = clutteredSkills[i].substring(lastSlash + 1, lastDot);
          cleanSkills.push(cleanSkill);
        }
        let cleanSkillsString = cleanSkills.join(",");
        console.log(cleanSkillsString);
        object = {
          skill: cleanSkillsString,
          ProfolioId: this.state.profolioId
        };
        API.saveSkills(object);
        break;
      case 2:
        object = {};
        break;
      case 3:
        object = {
          email: this.state.userEmail,
          phone: this.state.contactNumber,
          github: this.state.githubProfileLink,
          linkedIn: this.state.linkedInLink,
          ProfolioId: this.state.profolioId
        };
        API.saveContact(object);
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
  };

  addProjectClick = () => {
    let project = {
      projectTitle: this.state.projectTitle,
      href: this.state.deployedLink,
      aboutProject: this.state.aboutProject,
      githubLink: this.state.githubLink,
      projectPicture: this.state.projectPicture
    };
    this.setState({
      eachProject: [project],
      footerTruth: true
    });
    console.log(project);
  };

  saveProjectButton = async () => {
    let savedProjectCard = {
      name: this.state.projectTitle,
      thumbnail: this.state.projectPicture,
      deployedLink: this.state.deployedLink,
      githubLink: this.state.githubLink,
      aboutProject: this.state.aboutProject,
      ProfolioId: this.state.profolioId
    };

    API.saveProjectCard(savedProjectCard).then(async response => {
      console.log(response.data);
    });

    let projectCard = this.state.savedProject;

    projectCard.push({
      name: this.state.projectTitle,
      projectPicture: this.state.projectPicture,
      deployedLink: this.state.deployedLink,
      githubLink: this.state.githubLink,
      aboutProject: this.state.aboutProject
    });

    this.setState({
      eachProject: [],
      projectTitle: "Project Title",
      aboutProject: "About Project",
      githubLink: "Github Project Link",
      deployedLink: "Deployed Project Link",
      projectPicture: "images/project-placeholder.png",
      footerTruth: false
    });
    console.log(projectCard);
  };

  serveLink = () => {
    this.nextClick();
    let newId = (this.state.profolioId + 255) * 3 - 1234;
    this.setState({
      servedLink: newId
    });
    console.log(newId);
    this.handleShow();
  };

  handleClose = () => {
    console.log(this.state.show);
    this.setState({ show: false });
  };
  handleShow = () => {
    console.log(this.state.show);
    this.setState({ show: true });
  };

  handleFooterChange = () => {
    if (this.state.footer === 0) {
      return (
        <Footer1
          onChange={this.handleInputChange}
          nextClick={this.nextClick}
          getBaseFile={this.getBaseFile}
          fullName={this.state.fullName}
          aboutMe={this.state.aboutMe}
        />
      );
    }
    if (this.state.footer === 1) {
      if (this.refs.html5) {
        console.log(this.refs.html5);
      }
      return (
        <Footer2
          onChange={this.handleInputChange}
          nextClick={this.nextClick}
          previousClick={this.previousClick}
          addProjectClick={this.addProjectClick}
          isChecked={this.isChecked}
          getBaseFile={this.getBaseFile}
        />
      );
    }
    if (this.state.footer === 2) {
      if (!this.state.footerTruth) {
        return (
          <Footer3Button
            cardButton={this.state.cardButton}
            nextClick={this.nextClick}
            previousClick={this.previousClick}
            addProjectClick={this.addProjectClick}
          />
        );
      } else if (this.state.footerTruth) {
        return (
          <Footer3
            onChange={this.handleInputChange}
            nextClick={this.nextClick}
            previousClick={this.previousClick}
            saveProjectButton={this.saveProjectButton}
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
          contactNumber={this.state.contactNumber}
          userEmail={this.state.userEmail}
          linkedInLink={this.state.linkedInLink}
          githubProfileLink={this.state.githubProfileLink}
          serveLink={this.serveLink}
          handleShow={this.handleShow}
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
        {this.renderRedirect()}
        {console.log(this.state.footer)}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Copy and Paste to Share your Profolio!</Modal.Title>
          </Modal.Header>
          https://powerful-taiga-80042.herokuapp.com/profolio
          {this.state.servedLink}
          <Modal.Footer>
            <Button
              variant="primary"
              text="Close"
              className="float-right medium buttonColor2 font-weight-bold btn active mr-1"
              href="/usersplash"
              onClick={this.handleClose}
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCreation;
