import React from 'react';
import JustifiedGrid from 'react-justified-grid';
import {Container} from 'react-bootstrap';
import {WedData} from './WedData'; 
import WedGallery from './WedGallery/WedGallery'

const Wed = () => {
    return (
        <div>
            <Container>
        <JustifiedGrid 
            gutter={5}
            images={WedData}
            maxRowHeight={200}
            rows={undefined}
            
        />
        
        </Container>
        <WedGallery/>
        </div>
    )
}

export default Wed;
