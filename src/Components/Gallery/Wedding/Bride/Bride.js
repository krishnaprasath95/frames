import React from 'react';
import JustifiedGrid from 'react-justified-grid';
import {SRLWrapper} from 'simple-react-lightbox';
import BrideGallery from './BrideGallery/BrideGallery';
import {Container} from 'react-bootstrap';
import {BrideData} from './BrideData'; 


const optionsBride ={
    buttons:{
        showDownloadButton:false
    }
}

const Bride = () => {
   
    return (
        <div>
            <Container>
        <SRLWrapper options={optionsBride}>
        <JustifiedGrid
            gutter={5}
            images={BrideData}
            maxRowHeight={200}
            rows={undefined}
        />        
        </SRLWrapper>
        </Container>
        <BrideGallery/>
        </div>
    )
}

export default Bride;
