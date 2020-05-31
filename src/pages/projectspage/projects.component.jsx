import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";

import { ReactComponent as Logo1 } from "../../assets/crown.svg";

import "./projects.styles.scss";

const Logo2 = require("../../assets/logo-green-small.png");
const Logo3 = require("../../assets/favicon.ico");

const ProjectsPage = () => {
  return (
    <div className="project-page-content">
      <h1 className="project-page-title">Projects</h1>
      <CardDeck className="project-contents">
        <Card className="card1" border="dark">
          <Card.Body>
            <Logo1 className="crwn-logo" />
            <Card.Title className="card-title">
              {" "}
              <Link className="link-text" to="/crown-plaza">
                {" "}
                Crown Plaza{" "}
              </Link>
            </Card.Title>
            <Card.Text className="card-content">
              Complete E-commerce Single Page Application.
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="dark">
          <Card.Body>
            <img alt="natours-logo" src={Logo2} className="natours-logo" />
            <Card.Title className="card-title">Natours</Card.Title>
            <Card.Text className="card-text">
              Complete Server-side E-commerce website. <br />
              <span>
                Tools Used:
                <li>PUG</li>
                <li>MongoDB (Mongoose)</li>
                <li>Node.JS (Express)</li>
                <li>Stripe</li>
                <li>Heroku</li>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="dark">
          <Card.Body>
            <img alt="cv-logo" src={Logo3} className="cv-logo" />
            <Card.Title>nguyen-kenny.com</Card.Title>
            <Card.Text>
              Personal Portfolio Website Tools Used:
              <li>PUG</li>
              <li>MongoDB (Mongoose)</li>
              <li>Node.JS (Express)</li>
              <li>Stripe</li>
              <li>Heroku</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};
export default ProjectsPage;
