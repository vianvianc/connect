import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import React from 'react';
export default function SidebarCard(props) {
  return (

    <Container fluid>

      <Row className="justify-content-around" style={{ marginTop: "200px" }}>

        <Col xs={12} md={5} className="border" style={{ minHeight: "200px", minWidth: "200px" }}>
          <p>Hello</p>
          <Card className="text-center col-9 border">
            <Card.Body>
              {/* <Card.Title><u>{props.title}</u></Card.Title>
              <Card.Subtitle>{props.date}</Card.Subtitle>
              <Card.Text>{props.time}</Card.Text>
              <Card.Text>{props.text}</Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      
        <Col md={5} className="border" style={{ minHeight: "200px", minWidth: "200px" }}>
          <p>Hello</p>
        </Col>
      </Row>
    </Container>
  );
}