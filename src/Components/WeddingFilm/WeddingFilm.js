import React,{useEffect,useRef}from 'react';
import lottie from 'lottie-web';
import Films from './Films';
import {Container,Row} from 'react-bootstrap';
import {VideoFilm} from './VideoFilm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WeddingFilm.css';
import FooterA from '../Footer/FooterA/FooterA';


const WeddingFilm = () => {
    const containerFilm=useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container:containerFilm.current,
            renderer:"svg",
            loop:true,
            autoplay:true,
            animationData:require('./Videograph.json')
        });
        AOS.init({duration:1500});
    },[])
    return (
        <>
        <div className="filmBanner">
            <div className="filmBg">
            </div>
            <div className="film-title">
                <h1>Wedding Film</h1>
            </div>
            <div className="filmLottie">
                <div id="lottie" ref={containerFilm}></div>
            </div>
        </div>
        <FooterA/>
        <Container data-aos="fade-up" fluid className="mt-5 mb-4 "  >
         <Row className="mt-3 mb-2 ">
        {VideoFilm.map((el,index)=>{
            return <Films key={index}
                    image={el.image}
                    title={el.title}
                    city={el.city}
                    src={el.src}
                     />
        })}
        </Row>
        </Container>
        </>
    )
}

export default WeddingFilm;
