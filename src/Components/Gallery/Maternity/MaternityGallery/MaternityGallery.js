import React,{useState} from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import {MaternityPics} from './MaternityGalleryData';
import 'react-bnb-gallery/dist/style.css';


const MaternityGallery = () =>{
    const [Open, setOpen] = useState(false);

    return(
        <>
        <button className="btn overlayLeftBtn mt-4 mb-2" onClick={()=>setOpen(true)}>
        <span>Explore more</span>
        </button>
        <ReactBnbGallery  
        show={Open}
        photos={MaternityPics}
        onClose={()=>setOpen(false)}
        />
        </>
    );
}
export default MaternityGallery;