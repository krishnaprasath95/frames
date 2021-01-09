import React from 'react';
import JustifiedGrid from 'react-justified-grid';
import {Container} from 'react-bootstrap';
import {SRLWrapper} from 'simple-react-lightbox';
import {WedData} from './WedData'; 
import WedGallery from './WedGallery/WedGallery'



const options ={
    buttons:{
        showDownloadButton:false
    }
}

const Wed = () => {
    return (
        <div>
            <Container>
                <SRLWrapper options={options}>
        <JustifiedGrid 
            gutter={5}
            images={WedData}
            maxRowHeight={200}
            rows={undefined}
            
        />
        </SRLWrapper>
        </Container>
        <WedGallery/>
        </div>
    )
}

export default Wed;
