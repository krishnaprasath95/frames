import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {SRLWrapper} from 'simple-react-lightbox';
import SimpleReactLightbox from 'simple-react-lightbox';
import {MaternityData} from './MaternityData';
import MaternityGallery from './MaternityGallery/MaternityGallery';
import JustifiedGrid from 'react-justified-grid';
import './Maternity.css';

const optionsMaternity ={
    buttons:{
        showDownloadButton:false
    }
}

const Maternity = () => {
    return (
        <>
        <SimpleReactLightbox>
        <div className="maternityBanner text-center">
            <h2 className="pt-2">Maternity Photography</h2>
        </div>

        <div className="mt-5 mb-4 text-center">
        <Jumbotron fluid>
            <h3>Some title</h3>
            <p>quam et consequat interdum, elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
        </Jumbotron>
        </div>
        <div className="mt-5 mb-4">
            <SRLWrapper options={optionsMaternity}>
        <JustifiedGrid 
            gutter={5}
            images={MaternityData}
            maxRowHeight={200}
            rows={undefined}    
        />
        </SRLWrapper>
        </div>
        <div className="text-center mt-4">
        <MaternityGallery/>
        </div>
        </SimpleReactLightbox>
        </>
    )
}

export default Maternity;
