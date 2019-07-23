import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Button from "../Button/Button";
<<<<<<< HEAD
import { Table } from "react-bootstrap";
import UserProject from "../UserProjects/UserProjects";

class PortfoliosCreated extends Component {
  state = {
    redirect: false,
    profiles: [{
      name: "Nothing here bubs!"
    }],
    port: ""
  };
=======
import LargeLogo from "../Logo/LargeLogo"
import { Table, Row, Col, Container } from "react-bootstrap";

class PortfoliosCreated extends Component {

  state = {
    redirect: false
  }
>>>>>>> d428a4c1a264e115515c2c08ac0584af717a43df

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

<<<<<<< HEAD
  // showProfiles = () => {
  //   if(this.state.profiles){
  //     
  //   }else{
  //    return <UserProject>Nothing here bub</UserProject>
  //   }

  // }

  componentDidMount() {
    API.authCheck().then(data => {
      console.log("logging: " + data);
      //this.setState({ redirect: true });
    });
    console.log();
    API.grabProfiles().then(data => {
      console.log(data);
      console.log(data.data);
      this.setState({ profiles: data.data });
      //console.log(data)
    });
  }

  render() {
    

    return (
      <div>
        <div className="card-body list-overflow-container">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th className="">
                  <h1>Portfolios Created</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
              {this.state.profiles.map(profile=>(
              <UserProject
                  name={profile.name}
                  key={profile.id} 
                  onClick={profile.link}
                  />))}
                <Button
                  text="Delete"
                  type="button"
                  onClick={() => {}}
                  className="float-right medium danger btn active"
                />
                <Button
                  text="Edit"
                  type="button"
                  onClick={() => {}}
                  className="float-right medium warning btn active"
                />
                
              </tr>
            </tbody>
          </Table>
          <Button
            text="Create New"
            type="button"
            href="/portfoliocreation"
            onClick={() => {}}
            className="float-right medium btn-dark btn"
          />
          {this.renderRedirect()}
        </div>
      </div>
=======
  componentDidMount() {
    API.authCheck().then((data) => {
      console.log(data)
      this.setState({ redirect: true })

    })
  }

  render(children) {
    return (
      <Container fluid={true} className="backgroundHead test overflow-auto pb-5">
        <Row>
          <LargeLogo />
        </Row>
        <Row>
          <Col />
          <Col xl="6" lg="6">
            <div className="card-body list-overflow-container">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th className="">
                      <h1>Portfolios Created</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {children}
                    <Button
                      text="Delete"
                      type="button"
                      onClick={() => { }}
                      className="float-right medium buttonColor2 btn active buttonFont ml-1 mr-2"
                    />
                    <Button
                      text="Edit"
                      type="button"
                      onClick={() => { }}
                      className="float-right medium buttonColor3 btn active buttonFont mr-1"
                    />
                  </tr>
                </tbody>
              </Table>
              <Button
                text="Create New"
                type="button"
                href="/template1"
                onClick={() => { }}
                className="float-right medium btn buttonColor buttonFont"
              />
              {this.renderRedirect()}
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
>>>>>>> d428a4c1a264e115515c2c08ac0584af717a43df
    );
  }
}

export default PortfoliosCreated;
