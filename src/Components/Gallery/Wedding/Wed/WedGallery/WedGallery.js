import React,{useState} from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

import {WedGalleryPics} from './WedGalleryData';
import 'react-bnb-gallery/dist/style.css';
import './WedGallery.css';
const WedGallery = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <button className="btn overlayLeftBtn mt-4 mb-2" onClick={()=>setIsOpen(true)}>
        <span>Explore more</span>
        </button>
        <ReactBnbGallery  
        show={isOpen}
        photos={WedGalleryPics}
        onClose={()=>setIsOpen(false)}
        />
        </>
    );
}
export default WedGallery;