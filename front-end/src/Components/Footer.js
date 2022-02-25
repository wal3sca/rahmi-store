import React from "react";
// import Opportunities from "../Components/Opportunities";
// import Contact from "../Components/Contact";
// import Team from "../Components/Team";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark d-flex justify-content-around py-4">
      <div className="Contact">
        <Button variant="light">Contact</Button>{" "}
      </div>

      <div className="Opportunities">
        <Button variant="light" className="Opportunities">
          Opportunities
        </Button>{" "}
      </div>

      <div className="Team">
        <Button variant="light">Team</Button>{" "}
      </div>
    </footer>
  );
};

export default Footer;
