import React from 'react'
import {Container,Row,Col,Modal} from 'react-bootstrap';
import wfA from '../../assets/2h.jpg';
import './Films.css';

const FilmrollB = ({show,handleClose,handleShow}) => {
    return (
       <>
               <Container className="mt-5 mb-4" >
        <Row>
            <Col className="mt-3 text-center" xs={12} sm={12} md={6} lg={6}>
            <div className="video-wedding" >
                <img className="video-image rounded" src={wfA} alt="" onClick={handleShow}  />
                <div className="video-info">
                    <h5>kp weds tipper</h5>
                    <p>Chennai da</p>
                </div>
                <Modal show={show} onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
                centered> 
                <Modal.Header closeButton >
                    <h5>Couple name</h5>
                    </Modal.Header>
                <Modal.Body>
                    <div className="videoFrame">
                    <iframe  title="title"
                     src="https://www.youtube.com/embed/1nydxbGhgv8"
                    />
                    </div>
                </Modal.Body>
                </Modal>
            </div>
            </Col>
            <Col className="mt-3 text-center" xs={12} sm={12} md={6} lg={6}>
            <div className="video-wedding" >
                <img className="video-image rounded" src={wfA} alt="" onClick={handleShow}  />
                <div className="video-info">
                    <h5>kp weds tipper</h5>
                    <p>Chennai da</p>
                </div>
                <Modal show={show} onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
                centered> 
                <Modal.Header closeButton >
                    <h5>Couple name</h5>
                    </Modal.Header>
                <Modal.Body>
                    <div className="videoFrame">
                    <iframe  title="title"
                     src="https://www.youtube.com/embed/1nydxbGhgv8"
                    />
                    </div>
                </Modal.Body>
                </Modal>
            </div>
            </Col>
        </Row>
        </Container>  

       </>
    )
}

export default FilmrollB;
