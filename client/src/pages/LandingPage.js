import React, { Component } from "react";
import LandingPage from "../components/LandingPage/LandingPage"
import Button from "../components/SubComponents/Button/Button";

class LandingPages extends Component {

  render() {
    return (
      <div>
        <LandingPage>
        </LandingPage>
        <Button
          text="TEST"
          type="submit"
          onClick={() => { }}
          className="small warning"
        />
        <br/>
        <br/>
        <Button
          text="TEST2"
          type="button"
          onClick={() => {console.log("YES") }}
          className="medium danger button"
        />
        <br/>
        <br/>
        <Button
          text="TEST2"
          type="button"
          onClick={() => { }}
          className="large primary btn"
        />
      </div>
    )
  };
};

export default LandingPages;
