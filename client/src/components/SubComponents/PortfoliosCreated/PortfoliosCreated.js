import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API"
import Button from "../Button/Button";
import LargeLogo from "../Logo/LargeLogo"
import { Table, Row, Col, Container } from "react-bootstrap";

class PortfoliosCreated extends Component {

  state = {
    redirect: false
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  componentDidMount() {
    API.authCheck().then((data) => {
      console.log(data)
      // this.setState({ redirect: true })
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
                href="/portfoliocreation"
                onClick={() => { }}
                className="float-right medium btn buttonColor buttonFont"
              />
              {this.renderRedirect()}
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default PortfoliosCreated;
