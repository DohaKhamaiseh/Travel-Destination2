import './TourDetails.css'
import { useParams } from "react-router-dom";
import { useState } from 'react';
const data = require('../../data/db.json')

function TourDetails() {
    const { id } = useParams();
    const [FullDesc, setFullDesc] = useState(false);
    const TourById = data.filter((tour) => tour.id === id)[0];

    const toggleDesc = () => {
        setFullDesc(!FullDesc);
    };

    const description = FullDesc
        ? TourById.info
        : TourById.info.split(' ').slice(0,25).join(' ');
        console.log(TourById.info.split(' ').slice(0,25).join(' ')) ;

    const label = FullDesc ? 'See Less' : 'See More';

    return (
        <div>
            <h1>{TourById.name}</h1>
            <p>{description}</p>
            {TourById.info.split(' ').slice(0,25).join(' ').length > 3}
            <button onClick={toggleDesc}>{label}</button>
        </div>
    );
}

export default TourDetails;