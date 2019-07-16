import React from "react";
import Button from "../Button/Button";
import { Table } from "react-bootstrap";

function PortfoliosCreated({ children }) {
  return (
    <div>
      <div className="card-body list-overflow-container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className=""><h1>Portfolios Created</h1></th>
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
          onClick={() => {}}
          className="float-right medium btn-dark btn"
        />
      </div>
    </div>
  );
}

export default PortfoliosCreated;
