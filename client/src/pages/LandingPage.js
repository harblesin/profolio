import React, { Component } from "react";
<<<<<<< HEAD
import LandingPage from "../components/LandingPage/LandingPage";
=======
import LandingPage from "../components/LandingPage/LandingPage"
import Button from "../components/SubComponents/Button/Button";
>>>>>>> fd903e6ca1f26306503708886afd4ca953c8eabc

class LandingPages extends Component {

  render() {
    return (
      <div>
        <LandingPage>
        </LandingPage>
<<<<<<< HEAD
=======
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
>>>>>>> fd903e6ca1f26306503708886afd4ca953c8eabc
      </div>
    )
  };
};

export default LandingPages;
