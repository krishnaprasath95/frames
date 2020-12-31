import React,{useState} from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import {BabyPics} from './BabyGalleryData';
import 'react-bnb-gallery/dist/style.css';
import './BabyGallery.css';

const BabyGallery = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <button className="btn overlayLeftBtn mt-4 mb-2" onClick={()=>setIsOpen(true)}>
        <span>Explore more</span>
        </button>
        <ReactBnbGallery  
        show={isOpen}
        photos={BabyPics}
        onClose={()=>setIsOpen(false)}
        />
        </>
    );
}
export default BabyGallery;