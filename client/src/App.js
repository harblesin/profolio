import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Main from "./components/LandingPage/Main";
// import all pages here
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import NewUser from "./pages/NewUser";
import PortfolioCreation from "./pages/PortfolioCreation";
import PortfoliosCreated from "./pages/PortfoliosCreated";
import Preview from "./pages/Preview";
import UserSplash from "./pages/UserSplash";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/newuser" component={NewUser} />
          <Route exact path="/portfoliocreation" component={PortfolioCreation} />
          <Route exact path="/portfolioscreated" component={PortfoliosCreated} />
          <Route exact path="/preview" component={Preview} />
          <Route exact path="/usersplash" component={UserSplash} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;