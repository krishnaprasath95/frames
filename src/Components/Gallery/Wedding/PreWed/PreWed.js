import React from 'react';
import JustifiedGrid from 'react-justified-grid';
import {Container} from 'react-bootstrap';
import {PreWedData} from './PreWedData'; 
import PreWedGallery from './PreWedGallery/PreWedGallery'

const PreWed = () => {
    return (
        <div>
            <Container>
        <JustifiedGrid 
            gutter={5}
            images={PreWedData}
            maxRowHeight={200}
            rows={undefined}
            
        />
        
        </Container>
        <PreWedGallery/>
        </div>
    )
}

export default PreWed;
