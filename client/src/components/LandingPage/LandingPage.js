import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API"
import Button from "../SubComponents/Button/Button";
import Form from "../SubComponents/Form/Form";
import LargeLogo from "../SubComponents/Logo/LargeLogo";

class LandingPage extends Component {

  state ={
    email: "",
    password: "",
    redirect: false
  }

  renderRedirect = () => {
    if(this.state.redirect){
      return <Redirect to ='/usersplash' />
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  login = event => {
    event.preventDefault();
    console.log(this.state.email)
    if (this.state.email && this.state.password) {
     let userInfo = {
       email: this.state.email,
       password: this.state.password
     } 
     console.log(userInfo)
      API.loginUser(userInfo).then(() => {
        alert("Welcome back "+this.state.email +"!")
        this.setState({redirect:true})
      });
    }else{
      alert("Must enter both a username and password")
    }
  };

  componentDidMount(){
    API.authCheck().then((data)=>{
      console.log("here i am")
      console.log(data)
      this.setState({redirect:true})
      
    })
  }

  render(){
    return (
    <div className="backG">
      <LargeLogo />
      <br />
          <div className="rounded-lg">
            <div className="rounded w-25 m-auto rounded-lg">
              <Form
                className="opacity form-control border border-dark"
                id="userName"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
              <Form
                className="opacity form-control border border-dark"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <Button
                text="New User?"
                type="button"
                href="/newuser"
                onClick={() => {}}
                className="float-left medium btn-dark btn"
              />
              <Button
                text="Login"
                type="button"
                onClick={this.login}
                className="float-right medium teal btn"
              />
              {this.renderRedirect()}
            </div>
          </div>
    </div>
  );
  }
  
}

export default LandingPage;
