import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {FaMapMarkerAlt,FaPhoneSquareAlt} from 'react-icons/fa';
import {AiFillMail} from 'react-icons/ai';
import Faq from './Faq';
import './Contact.css';


const Contact = () => {
    return (
        <>
            <div className="contactBanner text-center p-2">
            <h3>Get In Touch</h3>
            <p>est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
        </div>

        <div className="contactContent mt-4 mb-4 text-center">
            <Container>
            <Row className="mt-3">
                <Col className="mb-3" xs={12} sm={12} md={6} lg={6}>
                    <div className="address-bar mt-2 ">
                        <h4>Main Office Chennai</h4>
                    <FaMapMarkerAlt className="address-icon mt-2"/>
                    <div className="address-body mt-1">
                        <p>address line 1,<br/>
                        address line 2 ,<br/>
                        City.
                        </p>
                        <a href="https://www.google.co.in/maps/place/framesntales/@13.0417399,80.2655092,16.48z/data=!4m5!3m4!1s0x3a5267c7cd3e341d:0x7e6fceb0be7e1056!8m2!3d13.0417121!4d80.2672687?hl=en">
                            <button className=" mb-2 btn btn-md btn-outline-dark">
                                Locate us
                            </button>
                        </a>
                    </div>
                    <AiFillMail className="address-icon mt-2" />
                    <div className="address-body mt-1">
                        <p>email@framesntales.com</p>
                    </div>
                    <FaPhoneSquareAlt className="address-icon mt-2"/>
                    <div className="address-body mt-1">
                        <p>+91-8387x xxxxx</p>
                        <a href="tel:+9188xxxxxxx">
                            <button className="btn btn-md btn-outline-dark">
                                Call Us
                            </button>
                        </a>
                    </div>
                    </div>
                </Col>
                <Col className="mb-3" xs={12} sm={12} md={6} lg={6}>
                <div className="address-bar mt-2 ">
                        <h4>Branch Office-Aruppukottai</h4>
                    <FaMapMarkerAlt className="address-icon mt-2"/>
                    <div className="address-body mt-1">
                        <p>address line 1,<br/>
                        address line 2 ,<br/>
                        City.
                        </p>
                        <a href="https://www.google.co.in/maps/place/SUZUKI+BALAJI+MOTORS/@9.5072488,78.0921862,21z/data=!4m5!3m4!1s0x3b0131a2dfdfc387:0xfb5a5bc7c76259bc!8m2!3d9.50721!4d78.092315?hl=en">
                            <button className=" mb-2 btn btn-md btn-outline-dark">
                                Locate us
                            </button>
                        </a>
                    </div>
                    <AiFillMail className="address-icon mt-2" />
                    <div className="address-body mt-1">
                        <p>email@framesntales.com</p>
                    </div>
                    <FaPhoneSquareAlt className="address-icon mt-2"/>
                    <div className="address-body mt-1">
                        <p>+91-8387x xxxxx</p>
                        <a href="tel:+9188xxxxxxx">
                            <button className="btn btn-outline-dark">
                                Call Us
                            </button>
                        </a>
                    </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
        <div className="text-center mt-5 mb-4">
        <h2 className="midlineFaq mb-3">FAQ</h2>
        <Faq/>
        </div>
        </>
    )
}

export default Contact;
