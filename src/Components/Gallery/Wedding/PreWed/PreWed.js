import React from 'react';
import JustifiedGrid from 'react-justified-grid';
import {SRLWrapper} from 'simple-react-lightbox';
import PrewedGallery from './PreWedGallery/PreWedGallery';
import {Container} from 'react-bootstrap';
import {PreWedData} from './PreWedData'; 


const optionsPrewed ={
    buttons:{
        showDownloadButton:false
    }
}

const PreWed = () => {
   
    return (
        <div>
            <Container>
        <SRLWrapper options={optionsPrewed}>
        <JustifiedGrid
            gutter={5}
            images={PreWedData}
            maxRowHeight={200}
            rows={undefined}
        />        
        </SRLWrapper>
        </Container>
        <PrewedGallery/>
        </div>
    )
}

export default PreWed;
