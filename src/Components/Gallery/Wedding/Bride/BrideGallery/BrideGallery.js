import React,{useState} from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import {BridePics} from './BrideGalleryData';
import 'react-bnb-gallery/dist/style.css';
import './BrideGallery.css';
const PreWedGallery = () =>{
    const [isOpened, setIsOpened] = useState(false);
    return(
        <>
        <button className="btn slideUpperBtn mt-4 mb-2" onClick={()=>setIsOpened(true)}>
        <span>Explore More</span>
        </button>
        <ReactBnbGallery  
        show={isOpened} 
        photos={BridePics}
        onClose={()=>setIsOpened(false)}
        />
        </>
    );
}
export default PreWedGallery;