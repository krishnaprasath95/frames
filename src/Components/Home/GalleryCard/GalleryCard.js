import React from 'react';
import GalA from '../../../assets/2h.jpg';
import {Link} from 'react-router-dom';
import {Card,Button,CardGroup} from 'react-bootstrap';
import './GalleryCard.css';
const GalleryCard = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="mt-4 midline">Our Gallery</h2>
            </div>
            <CardGroup className="homeCardGroup">
        <Card className="cardHome" >
            <Card.Img variant="top" src={GalA} />
            <Card.Body>
            <Card.Title>Wedding Photography</Card.Title>
            <Card.Text>
            Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velit
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to="/wedding">
                <Button className="btn btn-primary">View</Button>
            </Link>
            </Card.Footer>
        </Card>
        <Card className="cardHome">
            <Card.Img variant="top" src={GalA} />
            <Card.Body>
            <Card.Title>Baby Photography</Card.Title>
            <Card.Text>
            Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velit
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to="/baby">
                <Button className="btn btn-primary">View</Button>
            </Link>
            </Card.Footer>
        </Card>
        <Card className="cardHome">
            <Card.Img variant="top"src={GalA} />
            <Card.Body>
            <Card.Title>Maternity Photography</Card.Title>
            <Card.Text>
            Integer a mollis lorem. Phasellus volutpat, erat ut pellentesque rhoncus, leo justo facilisis velitas
               
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to="/">
                <Button>View</Button>
            </Link>
            </Card.Footer>
        </Card>
</CardGroup>
        </div>
    )
}

export default GalleryCard;
