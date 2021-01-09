import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Container,Row,Col} from 'react-bootstrap'

import {Carousel} from 'react-responsive-carousel';
import hA from '../../assets/1h.jpg';
import hB from '../../assets/2h.jpg';
import hC from '../../assets/3h.jpg';

import GalleryCard from './GalleryCard/GalleryCard';

import Testimony from './Testimony/Testimony';
import './Home.css';


const Home = () => {
    
    return (
        <>
        <Carousel autoPlay style={{width:"100%"}}>    
            <div className="homeBanner">
                <img src={hA} alt=""/>
            </div>
            <div className="homeBanner">
                <img src={hB} alt=""/>
            </div>
            <div className="homeBanner">
                <img src={hC} alt=""/>
            </div>
        </Carousel>
        <div className="homeContent ">
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12}>
                   <h3 className="mt-3 mb-3">Frames 'N' Tales</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget placerat nulla. Donec non lacus dapibus, pellentesque eros et, pulvinar urna. Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velit, eu convallis felis lacus dignissim ex. Morbi pellentesque porttitor ex, eget venenatis ligula hendrerit malesuada.</p> 
                </Col>
                <Col lg={6} md={6} sm={12}>
                <img src={hA} style={{width:"300px",height:"200px"}} alt="sdf" />
                </Col>
            </Row>
        </Container>
        </div>
        <div className="text-center">
        <GalleryCard/>
        </div>
        <div className="text-center mt-5 mb-4">
           <Testimony/>
        </div>
        <div className="homeFixedbanner mt-5 mb-4">

        </div>
        </>
    );
}

export default Home;
