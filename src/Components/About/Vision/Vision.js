import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {GiBullseye} from 'react-icons/gi';
import {SiGooglescholar} from 'react-icons/si';
import {FaEye,FaCameraRetro, FaImages,FaCrown} from 'react-icons/fa'
import './Vision.css';

const Vision = () => {
    return (
        <>
        <Container className="mt-5 mb-4 text-center">
            <Row className="p-2">
                <Col className="" xs={6} sm={6} md={4} lg={4}>
                    <FaEye className="vision-icons "/>
                    <h5 className="mt-2 mb-2">Vision</h5>
                    <p>Morbi pellentesque porttitor ex, eget venenatis ligula hendrerit malesuada.</p>
                </Col>
                <Col className="" xs={6} sm={6} md={4} lg={4}>
                    <FaCameraRetro className="vision-icons"/>
                    <h5 className="mt-2 mb-2">Perfect Gear</h5>
                    <p>Morbi pellentesque porttitor ex, eget venenatis ligula hendrerit malesuada.</p>
                </Col>
                <Col className="" xs={12} sm={12} md={4} lg={4}>
                    <GiBullseye className="vision-icons"/>
                    <h5 className="mt-2 mb-2">Focus</h5>
                    <p>Morbi pellentesque porttitor ex, eget venenatis ligula hendrerit malesuada.</p>
                </Col>
            </Row>
            <Row className="mt-4 mb-3 p-2">
                <Col className="" xs={6} sm={6} md={4} lg={4}>
                    <FaImages className="vision-icons"/>
                    <h5 className="mt-2 mb-2">Quality</h5>
                    <p>Morbi pellentesque porttitor ex, eget venenatis ligula hendrerit malesuada.</p>
                </Col>
                <Col className="" xs={6} sm={6} md={4} lg={4}>
                    <FaCrown className="vision-icons"/>
                    <h5 className="mt-2 mb-2">Passion</h5>
                    <p>Morbi pellentesque porttitor ex, eget venenatis ligula hendrerit malesuada.</p>
                </Col>
                <Col className="" xs={12} sm={12} md={4} lg={4}>
                    <SiGooglescholar className="vision-icons"/>
                    <h5 className="mt-2 mb-2">Professional Skill</h5>
                    <p>Morbi pellentesque porttitor ex, eget venenatis ligula hendrerit malesuada.</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Vision;
