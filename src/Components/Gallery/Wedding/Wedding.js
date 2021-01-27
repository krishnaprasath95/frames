import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Wed from './Wed/Wed';
import PreWed from './PreWed/PreWed';
import Bride from './Bride/Bride';
import SimpleReactLightbox from 'simple-react-lightbox';
import './Wedding.css';



const Wedding = () => {
    return (
        <>
        <SimpleReactLightbox>
        <div className="bannerWed text-center">
             <h3>Wedding Photograpy</h3>
        </div>
        <Jumbotron className="wedContent text-center p-4 mt-4 mb-2">
            <p> quam et consequat interdum, elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
            <p> quam et consequat interdum, elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
        </Jumbotron>
        <section className="text-center mt-5 mb-4">
            <h3 className="mt-3">Wedding</h3>
            <p className=" p-2">elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
        <Wed/>
        </section>
        <section className="text-center mt-5 mb-4">
            <h3 className="mt-3">Pre and Post Wedding</h3>
            <p className=" p-2">elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
        <PreWed/>
        </section>
        <section className="text-center mt-5 mb-4 p-2">
            <h3 className="mt-3">Bridal photography</h3>
            <p className=" p-2">elit justo maximus diam, quis elementum nulla sapien et lectus. Phasellus lobortis urna sit amet tellus placerat hendrerit. Sed efficitur non est at rhoncus. In lectus mi, eleifend quis hendrerit eu, vulputate nec ligula.</p>
        <Bride/>
        </section>
        </SimpleReactLightbox>
        </>
    )
}

export default Wedding;
