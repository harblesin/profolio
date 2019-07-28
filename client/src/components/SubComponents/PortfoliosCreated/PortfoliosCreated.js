import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Button from "../Button/Button";
import { Modal, Table, Row, Col } from "react-bootstrap";
import UserProject from "../UserProjects/UserProjects";
import Logout from "../Logout/Logout";
import Form from "../Form/Form";
//import Modal from "../Modal/Modal";

class PortfoliosCreated extends Component {
  state = {
    redirect: false,
    profileRedirect: false,
    editRedirect: false,
    profiles: [
      {
        name: "Nothing here bub!"
      }
    ],
    profId: "",
    profIdUrl: "",
    profEditUrl: "",
    show: false,
    name: ""
  };

  deleteProf = async event => {
    let profId = {
      id: event.target.id
    };
    this.setState({ profId: profId });
    console.log(profId);
    await API.deleteProfolio({ profId }).then(data => {
      console.log(data);
      //this.setState({profiles: data.data.data})
    });
    API.grabProfiles().then(data => {
      this.setState({ profiles: data.data.data });
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClose = () => {
    console.log(this.state.show);
    this.setState({ show: false });
  };
  handleShow = () => {
    console.log(this.state.show);
    this.setState({ show: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  profileRedirect = id => {
    console.log("working");
    if (this.state.profileRedirect) {
      console.log("were supposed ot be redirecting");
      let url = "/portfoliocreation" + id;
      return <Redirect to={url} />;
    }
  };

  editRedirect = id => {
    if (this.state.editRedirect) {
      console.log("were supposed ot be redirecting");
      let url = "/portfoliocreation" + id;
      return <Redirect to={url} />;
    }
  };

  edit = async event => {
    let id = event.target.id;
    await this.setState({
      profEditUrl: id,
      editRedirect: true
    });
  };

  componentDidMount() {
    console.log();
    API.grabProfiles().then(data => {
      console.log(data.data.auth);
      if (!data.data.auth) {
        this.setState({ redirect: true });
      } else {
        this.setState({ profiles: data.data.data });
      }
    });
  }

  logout = () => {
    API.logout().then(() => {
      alert("Logged Out");
    });
  };

  newProfolio = () => {
    API.newProfolio({ name: this.state.name }).then(async data => {
      console.log(data);
      await this.setState({
        profIdUrl: data.data,
        profileRedirect: true
      });
    });
  };

  render() {
    return (
      <div>
        {this.profileRedirect(this.state.profIdUrl)}
        {this.editRedirect(this.state.profEditUrl)}
        <Logout logout={this.logout} />
        <div className="card-body list-overflow-container">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th className="">
                  <h1>Portfolios Created</h1>
                </th>
              </tr>
            </thead>
                <tbody className="userSplashFix">
                  <tr>
                    {this.state.profiles.map(profile => (
                      <Row className="mt-2 mb-2">
                        <Col>
                          <UserProject
                            name={profile.name}
                            key={profile.id}
                            onClick={profile.link}
                          />
                          <Button
                            id={profile.id}
                            name="profId"
                            text="Delete"
                            type="button"
                            onClick={this.deleteProf}
                            className="float-right medium buttonColor2 font-weight-bold btn active ml-1 mr-2 mb-1"
                          />
                          <Button
                            id={profile.id}
                            text="Edit"
                            type="button"
                            onClick={this.edit}
                            className="float-right medium buttonColor3 font-weight-bold btn active mr-1"
                          />
                        </Col>
                      </Row>
                    ))}
                  </tr>
                </tbody>
          </Table>
          <Button
            text="Create New"
            type="button"
            onClick={this.handleShow}
            className="float-right medium font-weight-bold buttonColor btn"
          />
          {this.renderRedirect()}
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              What would you like to name your Profolio?
            </Modal.Title>
          </Modal.Header>
          <Form
            handleInputChange={this.handleInputChange}
            name="name"
            placeholder=" . . . My Very First Profolio . . ."
          />
          <Modal.Footer>
            <Button
              variant="primary"
              text="Start Creating!"
              className="float-right medium buttonColor3 font-weight-bold btn active mr-1"
              onClick={this.newProfolio}
            //href={this.state.profIdUrl}
            />
            <Button
              variant="primary"
              text="Cancel"
              className="float-right medium buttonColor2 font-weight-bold btn active mr-1"
              onClick={this.handleClose}
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PortfoliosCreated;
