import React from 'react';
import {Container} from 'react-bootstrap';
import {WedData} from './WedData'; 
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import { Gallery, Item } from 'react-photoswipe-gallery';
import './Wed.css';


const Wed = () => {

    return (
        <div>
        <Container>
        <div className="wedding-portfolio" >
        <Gallery options={{shareButtons:false}}>
    
    {WedData.map((item,index)=>(
    <div className="wedding-wrap" key={index}>
    <Item 
      original={item.origin}
      thumbnail={item.thumb}
      width={item.width}
      height={item.height}
    >
       
      {({ ref, open }) => (
      <img  src={item.origin}   ref={ref} onClick={open} alt=""  />
      )}
      </Item>
      </div>
    ))}
  </Gallery>
  </div>
        </Container>
      
        </div>
    )
}

export default Wed;
