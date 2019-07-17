import React from "react";
import Form from "../SubComponents/Form/Form";
import Button from "../SubComponents/Button/Button";
import { InputGroup, FormControl, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import SmallLogo from "../SubComponents/Logo/SmallLogo";

export function Footer1() {
  // full name, image, description of yourself
  return (
    <div>
      <div className="footerStyle">
        <Container>
          <Form
            className="opacity form-control border border-dark"
            id="firstName"
            placeholder="Full Name"
          />
          <Form
            className="opacity form-control border border-dark"
            id="firstName"
            placeholder="This will be the area will self image will be uploaded and stored to the db for portfolio. need to figure out how to do so"
          />
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder="Description"
              className="opacity border border-dark"
            />
          </InputGroup>
          <br />
          <Row>
            <Col>
              <Button
                text="Previous"
                type="button"
                onClick={() => {}}
                className="float-left medium teal btn"
              />
            </Col>
            <Col>
              <SmallLogo className="smallLogo" />
            </Col>
            <Col>
              <Button
                text="Next"
                type="button"
                onClick={() => {}}
                className="float-right medium teal btn"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export function Footer2() {
  // dropdown list of all developer skills(ex. html, css, jquery, etc), ability to add there own with a picture
  return (
    <div>
      <div className="footerStyle">
        <Container>
          <Form
            className="opacity form-control border border-dark"
            id="firstName"
            placeholder="First Name"
          />
          <Row>
            <Col>
              <Button
                text="Previous"
                type="button"
                onClick={() => {}}
                className="float-left medium teal btn"
              />
            </Col>
            <Col>
              <SmallLogo className="smallLogo" />
            </Col>
            <Col>
              <Button
                text="Next"
                type="button"
                onClick={() => {}}
                className="float-right medium teal btn"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export function Footer3() {
  // project picture, project title, project summary, github project link, deployed link(project picture and title)
  return (
    <div>
      <div className="footerStyle">
        <Container>
          <Row>
            <Col>
              <Form
                className="opacity form-control border border-dark"
                id="projectPicture"
                placeholder="Project Picture"
              />
            </Col>
            <Col>
              <Form
                className="opacity form-control border border-dark"
                id="lastName"
                placeholder="Project Title"
              />
            </Col>
          </Row>
          {/* where input fields will go with github and deployed links */}
          <Row>
            <Col>
              <Form
                className="opacity form-control border border-dark"
                id="projectPicture"
                placeholder="Deployed Link"
              />
            </Col>
            <Col>
              <Form
                className="opacity form-control border border-dark"
                id="lastName"
                placeholder="GitHub Link"
              />
            </Col>
          </Row>
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder="Project Summary"
              className="textArea opacity border border-dark"
            />
          </InputGroup>
          <br />
          <Row>
            <Col>
              <Button
                text="Previous"
                type="button"
                onClick={() => {}}
                className="float-left medium teal btn"
              />
            </Col>
            <Col>
              <SmallLogo className="smallLogo" />
            </Col>
            <Col>
              <Button
                text="Next"
                type="button"
                onClick={() => {}}
                className="float-right medium teal btn"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export function Footer4() {
  // name, email, subject line, email body
  return (
    <div>
      <div className="footerStyle">
        <Container>
          <div>
            <Row>
              <Col>
                <Form
                  className="opacity form-control border border-dark col"
                  id="firstName"
                  placeholder="Name"
                />
              </Col>
              <Col>
                <Form
                  className="opacity form-control border border-dark col"
                  id="lastName"
                  placeholder="Email"
                />
              </Col>
            </Row>
          </div>
          <Form
            className="opacity form-control border border-dark"
            id="userName"
            placeholder="Subject"
          />
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder="Body"
              className="textArea opacity border border-dark"
            />
          </InputGroup>
          <br />
          <Row>
            <Col>
              <Button
                text="Previous"
                type="button"
                onClick={() => {}}
                className="float-left medium teal btn"
              />
            </Col>
            <Col>
              <SmallLogo className="smallLogo" />
            </Col>
            <Col>
              <Button
                text="Next"
                type="button"
                onClick={() => {}}
                className="float-right medium teal btn"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
