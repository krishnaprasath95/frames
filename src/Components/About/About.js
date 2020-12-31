import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import aA from '../../assets/2h.jpg';
import AboutTeam from './Aboutteam.svg';
import Team from './Team/Team';
import Vision from './Vision/Vision';
import './About.css';
const About = () => {
    return (
        <>
            <div className="aboutBanner text-center">
                <h2 id="headerAbout">About Us</h2>
                <img src={AboutTeam} alt="About"/>
                <div className="aboutSvg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
                </div>
            </div>
            <div className="aboutContent mt-5 mb-4 ">
            <Container>
            <Row className="mt-4 text-center">
                <Col xs={12} sm={12} md={6} lg={6}>
                <img src={aA} className="rounded-circle" alt="about content"/>
                </Col>
                <Col className="mt-4">
                <h3>We Are</h3>
                <p> event, by rendering innovative concepts in Candid Photography & Videography would make weddings memorable events and looking back years later, a real pleasure for generations</p>
                <p> event, by rendering innovative concepts in Candid Photography & Videography would make weddings memorable events and looking back years later, a real pleasure for generations</p>
                </Col>
            </Row>
            </Container>
            <div className="mt-5">
                <h3 className="text-center pt-4">Vision and Mission</h3>
                <Vision/>
            </div>
            <section className="mt-5 mb-4 text-center">
                <h3>Our Team</h3>
                <Team/>
            </section>
            </div>
        </>
    )
}

export default About;
