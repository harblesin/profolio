import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Button from "../Button/Button";
import { Table } from "react-bootstrap";
import UserProject from "../UserProjects/UserProjects";

class PortfoliosCreated extends Component {
  state = {
    redirect: false,
    profiles: [
      "Nothing here bubs!"
    ],
    port: ""
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

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
    );
  }
}

export default PortfoliosCreated;
