import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {SRLWrapper} from 'simple-react-lightbox';
import SimpleReactLightbox from 'simple-react-lightbox';
import {BabyData} from './BabyData';
import BabyGallery from './BabyGallery/BabyGallery';
import JustifiedGrid from 'react-justified-grid';
import './Baby.css';

const optionsBaby = {
    buttons:{
        showDownloadButton:false
    }
}

const Baby = () => {
    return (
        <>
        <SimpleReactLightbox>
        <div className="babyBanner text-center">
            <h2 className="pt-2">Baby Photography</h2>
        </div>

        <div className="mt-5 mb-4 text-center">
        <Jumbotron fluid>
            <h3>Some title</h3>
            <p>quam et consequat interdum, elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
        </Jumbotron>
        </div>
        <div className="mt-5 mb-4">
            <SRLWrapper options={optionsBaby}>
        <JustifiedGrid 
            gutter={5}
            images={BabyData}
            maxRowHeight={200}
            rows={undefined}    
        />
        </SRLWrapper>
        </div>
        <div className="text-center mt-4">
        <BabyGallery/>
        </div>
        </SimpleReactLightbox>
        </>
    )
}

export default Baby;
