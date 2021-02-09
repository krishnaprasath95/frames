import React,{useState} from 'react';
import {Col,Modal} from 'react-bootstrap';

import './Films.css';

const Films = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    return (
        <>
            <Col className="mt-3 filmCol text-center mx-auto" xs={12} sm={12} md={4} lg={4}>
            <div className="video-wedding"  >
                <img className="video-image rounded" src={props.image} alt=""  onClick={handleShow}  />
                <div className="video-info">
                    <h5>{props.title}</h5>
                    <p>{props.city}</p>
                </div>
                <Modal show={show} onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
                centered> 
                <Modal.Header closeButton >
                    <h5>{props.title}</h5>
                    </Modal.Header>
                <Modal.Body>
                    <div className="videoFrame">
                    <iframe  title="title"
                     src={props.src} allowFullScreen
                    />
                    </div>
                </Modal.Body>
                </Modal>
            </div>
            </Col> 
        </>
    );
}

export default Films;
