import React from 'react';

import {Carousel,Container} from 'react-bootstrap';
import {FaUserCircle,FaQuoteLeft} from 'react-icons/fa';
import './Testimony.css'
const Testimony = () => {
    return (
        <div>
          <header className="mt-5 mb-4">
           <h3>What our Client's Say!</h3>
          </header>
        <Container className="mt-4 ">
        <Carousel id="testimonySlide">
          <Carousel.Item >
            <div className="testimony-item p-5">
              <FaQuoteLeft style={{color:"darkcyan"}}/>
              <p>Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velit</p>
              <div className="testimony-profile ">
                <FaUserCircle style={{color:"grey"}} />
                <h5 className="ml-2">Kp</h5>
              </div>
              <p>Chennai,Tamilnadu</p>
              </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="testimony-item p-5">
            <FaQuoteLeft style={{color:"darkcyan"}}/>
              <p>Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velit</p>
              <div className="testimony-profile text-center">
                <FaUserCircle style={{color:"grey"}} />
                <h5 className="ml-2">Tipper</h5>
              </div>
              <p>Chennai,Tamilnadu</p>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className=" testimony-item p-5">
            <FaQuoteLeft style={{color:"darkcyan"}}/>
              <p>Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velit</p>
              <div className="testimony-profile text-center">
                <FaUserCircle style={{color:"grey"}} />
                <h5 className="ml-2">Frames n tales</h5>
              </div>
              <p>Chennai,Tamilnadu</p>          
            </div>
          </Carousel.Item>
        </Carousel>
        </Container>
        </div>
    );
}

export default Testimony;
