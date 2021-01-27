import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
        <footer className="mt-4 mainFooter  text-center  text-white">
            <div className="footer-logo text-center mt-3 mb-3">
                <h5>Frames 'N' Tales Photography</h5>
            </div>
            <div className="g-ytsubscribe " data-channelid="UCcjy3SkaVIj75JW1E8fAUsQ"
             data-layout="full" data-count="default">
             </div>
            <Row className="mt-3" >
                <Col className="" xs={12} sm={6} md={3} lg={3}>
                <h5>Main-Office</h5>
                
                <p>Adress line 1,<br/>
                Adress line 2,<br/>
                Ciy<br/>
                pin</p>
                </Col>
                <Col className="" xs={12} sm={6} md={3} lg={3}>
                <h5>Branch-Office</h5>
            
                <p>Adress line 1,<br/>
                Adress line 2,<br/>
                City<br/>
                pin</p>
                </Col>
                <Col className="" xs={12} sm={6} md={3} lg={3}>
                <h5>Gallery</h5>
                <ul className="list-unstyled">
                <li>
                    <Link to="/wedding">Wedding</Link>
                </li>
                <li>
                    <Link to="/Baby">Baby</Link>
                </li>
                <li>
                    <Link to="/maternity">Maternity</Link>
                </li>
                </ul>
                </Col>
                <Col className="" xs={12} sm={6} md={3} lg={3}>
                <h5>Other Links</h5>
                <ul className="list-unstyled">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/weddingfilm">Wedding Film</Link>
                </li>
                <li>
                    <Link to="/contact">Contact-Us</Link>
                </li>
                </ul>
                </Col>
            </Row>
           
            <div className="text-center mt-2 mb-1">
                <p>&copy;{new Date().getFullYear()} Frames'N' Tales Photography</p>
            </div>
        
        </footer>
        </>
    )
}

export default Footer;
