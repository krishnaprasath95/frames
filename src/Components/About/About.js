import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import aA from '../../assets/2h.jpg';
import AboutTeam from './Aboutteam.svg';
import Team from './Team/Team';
import Vision from './Vision/Vision';
import './AboutUs.css';



const About = () => {
    return (
        <>
          
            <div className="aboutBanner">
                <div className="circle"></div>
                <div className="headerAbout">
                    <h2 className="aboutHead">About <span>Us.</span></h2>
                </div>
                <div className="aboutSvg">
                    <img src={AboutTeam} alt=".."/>
                </div>
            </div>
            <div className="aboutContent mt-5 mb-4 ">
            <Container>
            <Row className="mt-4 text-center">
                <Col xs={12} sm={12} md={6} lg={6}>
                <img src={aA} className="rounded-circle" alt="about content"/>
                </Col>
                <Col className="mt-4">
                <h3 className="midlineAbout">We Are</h3>
                <p> event, by rendering innovative concepts in Candid Photography & Videography would make weddings memorable events and looking back years later, a real pleasure for generations</p>
                <p> event, by rendering innovative concepts in Candid Photography & Videography would make weddings memorable events and looking back years later, a real pleasure for generations</p>
                </Col>
            </Row>
            </Container>
            <div className="mt-5">
                <h2 className="text-center midlineAbout pt-4">Vision and Mission</h2>
                <Vision/>
            </div>
            <section className="mt-5 mb-4 text-center">
                <h2 className="midlineAbout">Our Team</h2>
                <Team/>
            </section>
            </div>
        </>
    )
}

export default About;
