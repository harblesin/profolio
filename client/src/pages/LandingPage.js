import React, { Component } from "react";
import LandingPage from "../components/LandingPage/LandingPage"
import DeleteButton from "../components/SubComponents/DeleteButton/DeleteButton";
import CreateButton from "../components/SubComponents/CreateButton/CreateButton";
import SubmitButton from "../components/SubComponents/SubmitButton/SubmitButton";
import LoginButton from "../components/SubComponents/SubmitButton/SubmitButton";
import PreviewButton from "../components/SubComponents/PreviewButton/PreviewButton";
import NewUserButton from "../components/SubComponents/NewUserButton/NewUserButton";
import SaveButton from "../components/SubComponents/SaveButton/SaveButton";

class LandingPages extends Component {

  render() {
    return (
      <div>
        <LandingPage>
        </LandingPage>
        <DeleteButton />
        <br></br>
        <CreateButton />
        <br></br>
        <SubmitButton />
        <br></br>
        <LoginButton />
        <br></br>
        <PreviewButton />
        <br></br>
        <NewUserButton />
        <br></br>
        <SaveButton />
      </div>
    )
  };
};

export default LandingPages;
