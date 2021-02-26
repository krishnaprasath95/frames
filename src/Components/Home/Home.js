import React,{useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import hA from '../../assets/Home/homeBanner/hA.jpg';
import hB from '../../assets/Home/homeBanner/hB.jpg';
import hC from '../../assets/Home/homeBanner/hC.jpg';
import GalleryCard from './GalleryCard/GalleryCard';

import Testimony from './Testimony/Testimony';
import './Home.css';


const Home = () => {
    useEffect(()=>{
        AOS.init({duration:1500});
    },[]);
    return (
        <>
        <Carousel autoPlay showThumbs={false} style={{width:"100%"}}>    
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
        <div className="homeContent mt-5 mb-4">
        <Container>
            <Row>
                <Col data-aos="fade-up" lg={6} md={6} sm={12}>
                   <h3 className="mt-3 mb-3">Frames 'N' Tales</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget placerat nulla. Donec non lacus dapibus, pellentesque eros et, pulvinar urna. Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velit, eu convallis felis lacus dignissim ex. Morbi pellentesque porttitor ex, eget venenatis ligula hendrerit malesuada.</p> 
                </Col>
                <Col  lg={6} md={6} sm={12}>
                <img src={hA} style={{width:"300px",height:"200px"}} alt="sdf" />
                </Col>
            </Row>
        </Container>
        </div>
        <div data-aos="fade-up" className="text-center bg-light">
        <GalleryCard/>
        </div>
        
        <h2 data-aos="fade-up" className="midlineFilm mt-5 mb-2 text-center">Films</h2>
        <Container>
        <Row>
        <Col xs={12} sm={12} md={6} lg={6}> 
        <div data-aos="fade-up" className="text-center mt-5 mb-4 pl-3 pr-3 wedFilm">    
        <iframe frameBorder="0" height="100%" width="100%" title="Abi+Gomathi wedding"
        src="https://youtube.com/embed/HsEzRVWlzfc?autoplay=0&loop=1&controls=1&showinfo=0&autohide=1" allowFullScreen>
      </iframe>
        </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}> 
        <div data-aos="fade-up" className="text-center mt-5 mb-4 pl-3 pr-3 wedFilm">    
        <iframe frameBorder="0" height="100%" width="100%" title="Abi+Gomathi wedding"
        src="https://youtube.com/embed/HsEzRVWlzfc?autoplay=0&loop=1&controls=1&showinfo=0&autohide=1" allowFullScreen>
      </iframe>
        </div>
        </Col>
        </Row>
        </Container>
        <div  className="text-center filmBtn">
        <Link to="/weddingfilm">
        <button className="btn btn-md btn-outline-dark  ">Watch More</button>
      </Link>
        </div>
        
        <div data-aos="fade-up" className="text-center mt-5 mb-4">
           <Testimony/>
        </div>
        <div className="homeFixedbanner mt-5 mb-4">

        </div>
        </>
    );
}

export default Home;
