import './Tour.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import TourDetails from '../../TourDetails/TourDetails';

function Tour (props){
   



return (
    <>
    <Link to= {`/city/${props.tour.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.tour.image} />
                <Card.Body>
                    <Card.Title>{props.tour.name}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                  
                </Card.Body>
            </Card>
            </Link>

    </>
);
}

export default Tour ;