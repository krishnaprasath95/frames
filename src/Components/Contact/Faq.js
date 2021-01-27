import React from 'react';
import {Accordion,Card} from 'react-bootstrap';
import {FaPlusCircle} from 'react-icons/fa';
const Faq = () => {
    return (
        <div className="text-left">
<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Do we charge for Outdoor Shoot? <FaPlusCircle/>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Yes</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    When will we get our Wedding album? <FaPlusCircle/>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>6 – 8 weeks after customer selected a wedding photo copy.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </div>
    )
}

export default Faq;
