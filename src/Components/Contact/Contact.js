import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {FaMapMarkerAlt,FaPhoneSquareAlt} from 'react-icons/fa';
import {AiFillMail} from 'react-icons/ai'
import './Contact.css';


const Contact = () => {
    return (
        <>
            <div className="contactBanner text-center p-2">
            <h3>Get In Touch</h3>
            <p>est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
        </div>

        <div className="contactContent text-center">
            <Container>
            <Row className="mt-3">
                <Col  xs={12} sm={12} md={6} lg={6}>
                    <div className="address-bar mt-2 ">
                        <h4>Main Office Chennai</h4>
                    <FaMapMarkerAlt className="address-icon mt-2"/>
                    <div className="address-body mt-1">
                        <p>address line 1,<br/>
                        address line 2 ,<br/>
                        City.
                        </p>
                    </div>
                    <AiFillMail className="address-icon mt-2" />
                    <div className="address-body mt-1">
                        <p>email@framesntales.com</p>
                    </div>
                    <FaPhoneSquareAlt className="address-icon mt-2"/>
                    <div className="address-body mt-1">
                        <p>+91-8387x xxxxx</p>
                    </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                <div className="address-bar mt-2 ">
                        <h4>Branch Office-Aruppukottai</h4>
                    <FaMapMarkerAlt className="address-icon mt-2"/>
                    <div className="address-body mt-1">
                        <p>address line 1,<br/>
                        address line 2 ,<br/>
                        City.
                        </p>
                    </div>
                    <AiFillMail className="address-icon mt-2" />
                    <div className="address-body mt-1">
                        <p>email@framesntales.com</p>
                    </div>
                    <FaPhoneSquareAlt className="address-icon mt-2"/>
                    <div className="address-body mt-1">
                        <p>+91-8387x xxxxx</p>
                    </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
        </>
    )
}

export default Contact;
