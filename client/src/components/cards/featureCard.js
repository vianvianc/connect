import React from "react";
import Card from "react-bootstrap/Card";
import { useQuery } from "@apollo/client";
import { WEEKLY } from "../../utils/apollo/queries";

// import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.css";

const FeatureCard = ({ author, quoteDay, quoteOfTheDay, tableTopics, conversationStarters }) => {


const FeatureCard = (props) => {
  const { loading, err, data } = useQuery(WEEKLY);
  // const weekly = data?.weekly || [];
  if (loading) {
    return <p>Loading</p>;
  }

  if (err) {
    return <p>Err</p>;
  }
  // console.log(weekly);

  return (
    <Card className="text-center col-12 border" style={{marginTop: "100px"}}>
    <Card.Body>
        <Card.Title><u>{props.title}</u></Card.Title>
        <Card.Subtitle>{props.date}</Card.Subtitle>
        <Card.Text>{props.time}</Card.Text>

        <Card.Text>{props.text}</Card.Text>

    </Card.Body>
    </Card>

    // <Container fluid>

    // <Row className="justify-content-around" style={{marginTop: "200px"}}>

    // <Col xs={12} md={5} style={{minHeight: "200px", minWidth: "200px"}}>

    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <h5> {conversationStarters}</h5>
          <p>{tableTopics}</p>
        </Card.Title>
        <Card.Subtitle>
          <h6><i> {quoteOfTheDay}</i></h6>
          <i><text>{quoteDay}</text></i>
        </Card.Subtitle>
        <Card.Subtitle>
          <p> {author}</p>

        </Card.Subtitle>

        {/* <Card.Text><Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /></Card.Text> */}

      </Card.Body>
    </Card>

    // <Card className="text-center">
    //   <Card.Body>
    //     <Card.Title>
    //       <u>{weekly[Math.floor(Math.random() * 12)].tableTopics}</u>
    //     </Card.Title>
    //     <Card.Subtitle>
    //       {weekly[Math.floor(Math.random() * 12)].quoteDay}
    //     </Card.Subtitle>
    //     {/* <Card.Text>{props.time}3</Card.Text>
    //     <Card.Text>{props.text}4</Card.Text> */}
    //   </Card.Body>
    // </Card>


    // </Col>
    // </Row>

    // </Container>
  );
};

export default FeatureCard;
