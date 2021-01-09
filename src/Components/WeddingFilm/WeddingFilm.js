import React,{useState,useEffect,useRef}from 'react';
import lottie from 'lottie-web';

import Films from './Films';
import FilmrollA from './FilmrollA';
import FilmrollB from './FilmrollB';
import './WeddingFilm.css';
const WeddingFilm = () => {
     const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const containerFilm=useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container:containerFilm.current,
            renderer:"svg",
            loop:true,
            autoplay:true,
            animationData:require('./Videograph.json')
        })
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
       <Films show={show} handleClose={handleClose} handleShow={handleShow} />
       <FilmrollA show={show} handleClose={handleClose} handleShow={handleShow} />
       <FilmrollB show={show} handleClose={handleClose} handleShow={handleShow} />
        </>
    )
}

export default WeddingFilm;
