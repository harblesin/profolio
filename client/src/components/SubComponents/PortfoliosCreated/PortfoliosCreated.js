import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Button from "../Button/Button";
import { Table } from "react-bootstrap";

class PortfoliosCreated extends Component {
  state = {
    redirect: false,
    profiles: []
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  componentDidMount() {
    API.authCheck().then(data => {
      console.log("logging: " + data);
      //this.setState({ redirect: true });
    });
    console.log()
    API.grabProfiles().then(data=>{
      this.setState({profiles:data})
      console.log(data)
    })
    // API.grabPorts().then(data => {
    //   console.log(data);
    // });
  }

  render(children) {
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
                {children}
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
    );
  }
}

export default PortfoliosCreated;
