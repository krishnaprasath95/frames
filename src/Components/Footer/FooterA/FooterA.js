import React from 'react';
import {Row,Col,Jumbotron} from 'react-bootstrap';
import {FaFacebook,FaInstagram} from 'react-icons/fa';
import './FooterA.css';

const FooterA = () => {
    return (
        <>
        <Jumbotron className="mt-5 mb-4 text-center socialFooter ">
            <Row>
                <Col  className="mt-2 mb-2" xs={12} sm={12} md={4} lg={4}>
                <h2>Logo</h2>
                </Col>
                <Col className="mt-2 mb-2" xs={12} sm={12} md={4} lg={4}>
                <p>. Donec non lacus dapibus, pellentesque eros et, pulvinar urna. Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velit, eu convallis felis lacus dignissim ex. Morbi pellentesque porttitor ex</p>
                </Col>
                <Col  className="mt-2 mb-2" xs={12} sm={12} md={4} lg={4}>
                <a href="https://www.facebook.com/framesntales.stories" className="social-ic">
                    <FaFacebook/>
                </a>
                <a href="https://www.instagram.com/framesntales_photography?igshid=2wjcrczxzaqn" className="social-ic">
                    <FaInstagram/>
                </a>
                </Col>
            </Row>

        </Jumbotron>
        </>
    )
}

export default FooterA;
