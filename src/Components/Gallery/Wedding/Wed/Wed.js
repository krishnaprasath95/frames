import React from 'react';
import JustifiedGrid from 'react-justified-grid';
import {Container} from 'react-bootstrap';
import {SRLWrapper} from 'simple-react-lightbox';
import {WedData} from './WedData'; 



const optionsWed ={
    showThumbnails:false,
    buttons:{
        showDownloadButton:false
        
    }
}

const Wed = () => {
/*     const [toggler, setToggler] = React.useState(false); */
    return (
        <div>
            <Container>
                <SRLWrapper options={optionsWed}>
        <JustifiedGrid 
            gutter={5}
            images={WedData}
            maxRowHeight={400}
            rows={undefined}
            
        />
        </SRLWrapper>
       {/*  <button onClick={() => setToggler(!toggler)}>
        Toggle Lightbox
        </button>
        <FsLightbox
        toggler={toggler}
        sources={[
            '../../../../assets/Wed/wedL.jpg',
            '../../../../assets/Wed/wedM.jpg'
        ]}
        /> */}
        </Container>
      
        </div>
    )
}

export default Wed;
