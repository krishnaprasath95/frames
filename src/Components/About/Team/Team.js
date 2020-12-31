import React from 'react';
import memA from './TeamImg/avatar.jpg';
import memB from './TeamImg/avatar.jpg';
import memC from './TeamImg/avatar.jpg';
import memD from './TeamImg/avatar.jpg';
import memE from './TeamImg/avatar.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Team.css';

//number of items to show with respect to screen size
const responsive={
    0:{items:1},
    568:{items:2},
    1024:{items:3}
};

const TeamItems = [
    
    <div className="team-avatar">
        <img className="member-pic" src={memA} alt="Team Member"/>
    <div className="team-info">
        <h4>Team member 1</h4>
        <p>Lead Photographer</p>
    </div>
    </div>,
    <div className="team-avatar">
        <img className="member-pic" src={memB} alt="Team Member"/>
    <div className="team-info">
        <h4>Team member 2</h4>
        <p>Lead Photographer</p>
    </div>
    </div>,
    <div className="team-avatar">
        <img className="member-pic" src={memC} alt="Team Member"/>
    <div className="team-info">
        <h4>Team member 3</h4>
        <p>Lead Photographer</p>
    </div>
    </div>,
    <div className="team-avatar">
        <img className="member-pic" src={memD} alt="Team Member"/>
    <div className="team-info">
        <h4>Team member 4</h4>
        <p>Lead Photographer</p>
    </div>
    </div>,
    <div className="team-avatar">
        <img className="member-pic" src={memE} alt="Team Member"/>
    <div className="team-info">
        <h4>Team member 5</h4>
        <p>Lead Photographer</p>
    </div>
    </div>,
]

const Team = () => {
    return (
        <>
        <AliceCarousel 
        autoPlay
        infinite
        autoPlayInterval={4000}
        mouseTracking
        disableButtonsControls
        items={TeamItems}
        paddingLeft={5}
        paddingRight={5}
        responsive={responsive}
        
        />
        </>
    )
}

export default Team;
