import React from "react";
import API from "../../utils/API";
import Button from "../SubComponents/Button/Button";
import Form from "../SubComponents/Form/Form";
import LargeLogo from "../SubComponents/Logo/LargeLogo";

function LandingPage() {
  return (
    <div className="backG">
      <LargeLogo />
      <br />
          <div className="rounded-lg">
            <div className="rounded w-25 m-auto rounded-lg">
              <Form
                className="opacity form-control border border-dark"
                id="userName"
                placeholder="Email"
              />
              <Form
                className="opacity form-control border border-dark"
                id="password"
                placeholder="Password"
              />
              <Button
                text="New User?"
                type="button"
                onClick={() => {}}
                className="float-left medium btn-dark btn"
              />
              <Button
                text="Login"
                type="button"
                onClick={() => {}}
                className="float-right medium teal btn"
              />
            </div>
          </div>
    </div>
  );
}

export default LandingPage;
