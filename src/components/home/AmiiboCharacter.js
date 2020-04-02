import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// Home Page
function AmiiboCharacter({ name, image }) {
  return (
    <Col sm={12} md={4} lg={3} as="section">
      <Card>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Link to={"character/" + name}>
            <Button variant="primary" block role="button">
              More Info
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

AmiiboCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default AmiiboCharacter;
