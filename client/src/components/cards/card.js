
import React from 'react';
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown"
import { DropdownButton } from "react-bootstrap";

import "../../style/dropdownStyle.css"


const BasicCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.date}</Card.Subtitle>
      <Card.Text>{props.time}</Card.Text>
      <Card.Text>{props.location}</Card.Text>

      {/* <Button variant="secondary" className="dropdown-toggle" data-toggle="dropdown">Attendees</Button>
      <ul className="dropdown-menu scrollable">
        <li>Test</li>
        <li>Test2</li>
      </ul> */}

      <Dropdown>
        {/* <ul className="scrollable"> */}
        {/* <ListGroup> */}
        <DropdownButton id="dropdown-basic-button" title="Attendees">
        <Dropdown.ItemText>Test</Dropdown.ItemText>
        <Dropdown.ItemText>Test</Dropdown.ItemText>
        <Dropdown.ItemText>Test</Dropdown.ItemText>

        <Dropdown.Item action>Add</Dropdown.Item>
        {/* </ListGroup> */}


        </DropdownButton>

      </Dropdown>

    </Card.Body>

    </Card>
  );
};

export default BasicCard;
