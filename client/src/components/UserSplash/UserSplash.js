import React from "react";
import { Container } from "../Grid/Grid";
import LargeLogo from "../SubComponents/Logo/LargeLogo";
import PortfoliosCreated from "../SubComponents/PortfoliosCreated/PortfoliosCreated";

function UserSplash() {
  return (
    <div className="backG">
      <LargeLogo />
      <br />
      <br />
      <Container>
        <PortfoliosCreated>
        </PortfoliosCreated>
      </Container>
    </div>
  );
}

export default UserSplash;
