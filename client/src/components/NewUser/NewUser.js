import React from "react";
import Form from "../SubComponents/Form/Form";
import Button from "../SubComponents/Button/Button";
import LargeLogo from "../SubComponents/Logo/LargeLogo";

function NewUser() {
  return (
    <div>
      <div className="backG">
        <LargeLogo />
        <br />
        <div className="rounded w-25 m-auto rounded-lg">
          <div>
            <Form className="opacity form-control border border-dark" id="userName" placeholder="Email" />
            <Form className="opacity form-control border border-dark" id="password" placeholder="Password" />
            <Form className="opacity form-control border border-dark" id="userName" placeholder="Confirm Password" />
            <Button
              text="Sign Up"
              type="button"
              onClick={() => {}}
              className="float-right medium teal btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
