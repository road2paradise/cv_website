import React from "react";
import Card from "react-bootstrap/Card";
import { ReactComponent as Logo } from "../../assets/crown.svg";

class Crown extends React.Component {
  render() {
    return (
      <Card className="card1" border="dark">
        <Crown />
        <Card.Body>
          <Logo className="logo" />
          <Card.Title className="card-1-title">Crown Plaza</Card.Title>
          <Card.Text className="card-1-content">
            E-Commerce Single Page Application. <br />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Hover over for more information</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default Crown;
