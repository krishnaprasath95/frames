import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import BP1 from '../../../../assets/2h.jpg';
import BP2 from '../../../../assets/2h.jpg';
import './Bride.css';

const Bride = () => {
    return (
      <>
      <Container className="mt-5 mb-4 ">
          <Row className="mt-2">
              <Col xs={12} sm={12} md={4} lg={4}>
              <img src={BP1} alt=".." className="bride-section" />    
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <p>elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus.</p>
                <p>elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus.</p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <img src={BP2} alt=".." className="bride-section" />
              </Col>
          </Row>
      </Container>
      </>  
    );
}

export default Bride;
