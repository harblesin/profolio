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
import Template1 from "./pages/Template1";

function App() {
  return (
    <Router>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/newuser" component={NewUser} />
          <Route exact path="/portfoliocreation:id" component={PortfolioCreation} />
          <Route exact path="/portfolioscreated" component={PortfoliosCreated} />
          <Route exact path="/preview" component={Preview} />
          <Route exact path="/usersplash" component={UserSplash} />
          <Route exact path="/template1" component={Template1} />
        </Switch>
=======
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/newuser" component={NewUser} />
        <Route
          exact
          path="/portfoliocreation:id"
          component={PortfolioCreation}
        />
        <Route exact path="/portfolioscreated" component={PortfoliosCreated} />
        <Route exact path="/preview" component={Preview} />
        <Route exact path="/usersplash" component={UserSplash} />
        <Route exact path="/template1" component={Template1} />
      </Switch>
>>>>>>> 3d19b235e17661d3fbf40868a7f1242422e9a63f
    </Router>
  );
}

export default App;
