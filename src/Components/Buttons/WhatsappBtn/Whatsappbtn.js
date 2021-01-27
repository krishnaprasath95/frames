import React from 'react';
import {FaWhatsapp} from 'react-icons/fa';
import './Whatsappbtn.css';


const Whatsappbtn = () => {
    return (
        <>
         <div >
         <a href="https://wa.me/918383837373" className="whatsappBtn" rel="noopener noreferrer"  target="_blank">
        <FaWhatsapp className="WhatsappBtnIcon"/>
        </a>
        </div>   
        </>
    )
}

export default Whatsappbtn;
