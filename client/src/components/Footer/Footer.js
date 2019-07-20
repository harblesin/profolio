import React from "react";
import Form from "../SubComponents/Form/Form";
import Button from "../SubComponents/Button/Button";
import { Row, Col, Dropdown } from "react-bootstrap";
import SmallLogo from "../SubComponents/Logo/SmallLogo";

export function ButtonFooter() {
  return (
    <div>
      <Row>
        <Col className="text-center">
          <Button
            text="Next"
            type="button"
            onClick={() => {}}
            className="large teal btn"
          />
          <br />
          <br />
          <br />
          <Button
            text="Previous"
            type="button"
            onClick={() => {}}
            className="large teal btn"
          />
          <br />
        </Col>
      </Row>
    </div>
  );
}

export const Footer1 = props => {
  // full name, image, description of yourself
  return (
    <div>
      <div className="footerStyle">
        <Row>
          <Col className="text-center">
            <Form
              className="opacity form-control border border-dark"
              id="firstName"
              placeholder="Full Name"
              name="fullName"
              value={props.fullName}
              onChange={props.onChange}
            />
            <br />
            <Form
              className="opacity form-control border border-dark"
              id="profilePicture"
              placeholder="Profile Picture (URL/PNG)"
            />
            <Button
              text="Upload Picture"
              type="button"
              onClick={() => {}}
              className="medium teal btn"
            />
          </Col>
          <Col>
            <textarea
              placeholder="About Me"
              rows="5"
              cols="60"
              className="opacity border border-dark rounded rounded-lg"
              name="aboutMe"
              value={props.aboutMe}
              onChange={props.onChange}
            />
          </Col>
          <Col>
            <ButtonFooter />
          </Col>
          <Col>
            <SmallLogo className="smallLogo" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export function Footer2() {
  // dropdown list of all developer skills(ex. html, css, jquery, etc), ability to add there own with a picture
  return (
    <div>
      <div className="footerStyle">
        <Row>
          <Col className="text-center">
            {/* form for skills */}
          </Col>
          <Col>
          </Col>
          <Col>
            <ButtonFooter />
          </Col>
          <Col>
            <SmallLogo className="smallLogo" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export function Footer3() {
  // project picture, project title, project summary, github project link, deployed link(project picture and title)
  return (
    <div>
      <div className="footerStyle">
        <Row>
          <Col className="text-center">
            <Form
              className="opacity form-control border border-dark"
              id="firstName"
              placeholder="Project Title"
            />
            <Form
              className="opacity form-control border border-dark"
              id="profilePicture"
              placeholder="Project Picture (URL/PNG)"
            />
            <Button
              text="Upload Picture"
              type="button"
              onClick={() => {}}
              className="medium teal btn"
            />
          </Col>
          <Col>
            <Form
              className="opacity form-control border border-dark"
              id="profilePicture"
              placeholder="Github Link"
            />
            <Form
              className="opacity form-control border border-dark"
              id="profilePicture"
              placeholder="Deployed Link"
            />
          </Col>
          <Col>
            <textarea
              placeholder="Project Description"
              rows="5"
              cols="60"
              className="opacity border border-dark rounded rounded-lg"
            />
          </Col>
          <Col>
            <ButtonFooter />
          </Col>
          <Col>
            <SmallLogo className="smallLogo" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export const Footer4 = props => {
  // name, email, subject line, email body
  return (
    <div>
      <div className="footerStyle">
        <Row>
          <Col className="text-center">
            <Form
              className="opacity form-control border border-dark"
              id="firstName"
              placeholder="Contact Number"
              name="contactNumber"
              value={props.contactNumber}
              onChange={props.onChange}
            />
          </Col>
          <Col>

          </Col>
          <Col>
            <ButtonFooter />
          </Col>
          <Col>
            <SmallLogo className="smallLogo" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
