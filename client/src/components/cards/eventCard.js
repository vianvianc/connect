
import React from 'react';
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown"
import { DropdownButton } from "react-bootstrap";
import "../../style/dropdownStyle.css"
import AuthService from "../../utils/Auth"
import { ADD_PARENT_TO_EVENT } from "../../utils/apollo/mutations";
import { useMutation } from '@apollo/client';
const EventCard = (props) => {
    const userData = AuthService.getInfo();


    const [addParentToEvent] = useMutation(ADD_PARENT_TO_EVENT);

    const zoomRegex = new RegExp("^https://")

    const endRegex = new RegExp("(.*?)TX")

    const onAdd = async (e) => {

        e.preventDefault();
        addParentToEvent({variables: {"eventId": props.eventId, "parentId": userData.data._id}})
        window.location.reload();

    }

  return  userData? (
    <Card className='shadow mx-auto text-center' style={{ width: "18rem", minHeight: "16rem", marginTop: "2rem" }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.date}</Card.Subtitle>
      <Card.Text>{props.time}</Card.Text>
      { zoomRegex.test(props.location) ? <Card.Text><a href={props.location}>Link To Meeting</a></Card.Text> :
      <Card.Text>{endRegex.exec(props.location)[0]}</Card.Text>}
      
      <Dropdown>

        <DropdownButton id="dropdown-basic-button" title="Attendees" className='mb-2'>
        { props.attendees ? props.attendees.map( (currentPerson, index) => (
            <Dropdown.ItemText key={index}>{currentPerson.firstName} {currentPerson.lastName}</Dropdown.ItemText>
        )) : <Dropdown.ItemText>No Attendees Yet</Dropdown.ItemText>}
        <Dropdown.Item onClick={onAdd}>Add</Dropdown.Item>

        </DropdownButton>

   
        {props.eventDetails ? 

        <DropdownButton id="dropdown-basic-button" title="Information">
        { props.eventDetails ? 
        <Dropdown.ItemText>{props.eventDetails}</Dropdown.ItemText>:
        ""}

        </DropdownButton>
        : ""}

      </Dropdown>

    </Card.Body>
    </Card>
  ) : <h1>Please log in</h1>
};

export default EventCard;
