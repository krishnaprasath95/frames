import React from 'react';
import JustifiedGrid from 'react-justified-grid';
import {SRLWrapper} from 'simple-react-lightbox';

import {Container} from 'react-bootstrap';
import {PreWedData} from './PreWedData'; 


const options ={
    buttons:{
        showDownloadButton:false
    }
}

const PreWed = () => {
   
    return (
        <div>

            <Container>
        <SRLWrapper optionns={options}>
        <JustifiedGrid
            gutter={5}
            images={PreWedData}
            maxRowHeight={200}
            rows={undefined}
        />        
        </SRLWrapper>
        </Container>
        </div>
    )
}

export default PreWed;
