import React from "react";
import Form from "../SubComponents/Form/Form";
import Button from "../SubComponents/Button/Button";
import Checkbox from "../SubComponents/Checkbox/Checkbox"
import { Row, Col } from "react-bootstrap";
import SmallLogo from "../SubComponents/Logo/SmallLogo";
import FileBase from "react-file-base64";

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
            <div className="text-white medium bg-dark">Upload Image</div>
            <div className="process_upload-btn bg-dark rounded">
              <FileBase
                type="file"
                multiple={false}
                onDone={props.getBaseFile.bind(this)}
              />
            </div>
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
            <Row>
              <Col className="text-center">
                <Button
                  href="#skills"
                  text="Next"
                  type="button"
                  className="large teal btn scrolly"
                  name="footer"
                  onClick={() => props.nextClick()}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <SmallLogo className="smallLogo" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export const Footer2 = props => {
  // dropdown list of all developer skills(ex. html, css, jquery, etc), ability to add there own with a picture
  return (
    <div className="footerStyle">
      <Col>
        <Row>
          <Col>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/html5.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                HTML
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/css2.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                CSS
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/js.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Javascript
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/bootstrap.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Bootstrap
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/jquery.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Jquery
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/ajax.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Ajax
              </label>
            </div>

          </Col>
          <Col>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/express.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Express.js
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/api.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                API
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/react.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                React.js
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/node.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Node.js
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/mysql.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                MySQL
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/mongo.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                MongoDB
              </label>
            </div>
          </Col>
          <Col>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/fire.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Firebase
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/materialize.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Materialize
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/handlebars.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Handlebar.js
              </label>
            </div>
            <div className="form-check">
              <Checkbox
                name="checkedValue"
                value="./images/template1/sequelize.png"
                onClick={props.isChecked}
              />
              <label className="form-check-label font-weight-bolder skillsColor">
                Sequelize.js
              </label>
            </div>
          </Col>
          <Col xl="2" lg="2">
          <Form
              className="opacity form-control border border-dark"
              id="addSkill"
              placeholder="Add Your Own Skill"
              name="addSkill"
              value={props.fullName}
              onChange={props.onChange}
            />
          </Col>
          <Col className="text-center">
            <Row>
              <Col className="text-center">
                <Button
                  href="#portfolio"
                  text="Next"
                  type="button"
                  className="large teal btn scrolly"
                  name="footer"
                  onClick={() => props.nextClick()}
                />
                <br />
                <br />
                <Button
                  href="#veryTop"
                  text="Previous"
                  type="button"
                  className="large teal btn scrolly"
                  name="footer"
                  onClick={() => props.previousClick()}
                />
                <br />
              </Col>
            </Row>
          </Col>
          <Col>
            <SmallLogo className="smallLogo" />
          </Col>
        </Row>
      </Col>

    </div>
  );
};

export const Footer3 = props => {
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
              name="projectTitle"
              value={props.projectTitle}
              onChange={props.onChange}
            />
            <div className="text-white medium bg-dark">Upload Image</div>
            <div className="process_upload-btn bg-dark rounded">
              <FileBase
                type="file"
                multiple={false}
                onDone={props.getBaseFileProjectPic.bind(this)}
              />
            </div>
          </Col>
          <Col>
            <Form
              className="opacity form-control border border-dark"
              id="profilePicture"
              placeholder="Github Project Link"
              name="githubLink"
              value={props.githubLink}
              onChange={props.onChange}
            />
            <Form
              className="opacity form-control border border-dark"
              id="profilePicture"
              placeholder="Deployed Project Link"
              name="deployedLink"
              value={props.deployedLink}
              onChange={props.onChange}
            />
          </Col>
          <Col>
            <textarea
              placeholder="Project Description"
              rows="4"
              cols="60"
              className="opacity border border-dark rounded rounded-lg"
              name="aboutProject"
              value={props.aboutProject}
              onChange={props.onChange}
            />
            <Button
              text="Add Project"
              type="button"
              className="medium teal btn float-right"
              name="eachProject"
              onClick={() => props.addProjectClick()}
            />
          </Col>
          <Col>
            <Row>
              <Col className="text-center">
                <Button
                  href="#contact"
                  text="Next"
                  type="button"
                  className="large teal btn scrolly"
                  name="footer"
                  onClick={() => props.nextClick()}
                />
                <br />
                <br />
                <Button
                  href="#skills"
                  text="Previous"
                  type="button"
                  className="large teal btn scrolly"
                  name="footer"
                  onClick={() => props.previousClick()}
                />
                <br />
              </Col>
            </Row>
          </Col>
          <Col>
            <SmallLogo className="smallLogo" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

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
            <Form
              className="opacity form-control border border-dark"
              id="profilePicture"
              placeholder="Github Profile Link"
              name="githubProfile"
              value={props.githubProfileLink}
              onChange={props.onChange}
            />
            <Form
              className="opacity form-control border border-dark"
              id="profilePicture"
              placeholder="LinkedIn Link"
              name="linkedInLink"
              value={props.linkedInLink}
              onChange={props.onChange}
            />
          </Col>
          <Col>
            <Row>
              <Col className="text-center">
                <Button
                  href=" "
                  text="Preview"
                  type="button"
                  className="large teal btn scrolly"
                  name="footer"
                  onClick={() => props.nextClick()}
                />
                <br />
                <br />
                <Button
                  href="#portfolio"
                  text="Previous"
                  type="button"
                  className="large teal btn scrolly"
                  name="footer"
                  onClick={() => props.previousClick()}
                />
                <br />
              </Col>
            </Row>
          </Col>
          <Col>
            <SmallLogo className="smallLogo" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
