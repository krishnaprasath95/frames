import React,{useState} from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import {PreWedPics} from './PreWedGalleryData';
import 'react-bnb-gallery/dist/style.css';
import './PreWedGallery.css';
const PreWedGallery = () =>{
    const [isOpened, setIsOpened] = useState(false);

    return(
        <>
        <button className="btn slideUpBtn mt-4 mb-2" onClick={()=>setIsOpened(true)}>
        <span>Explore More</span>
        </button>
        <ReactBnbGallery  
        show={isOpened}
        photos={PreWedPics}
        onClose={()=>setIsOpened(false)}
        />
        </>
    );
}
export default PreWedGallery;