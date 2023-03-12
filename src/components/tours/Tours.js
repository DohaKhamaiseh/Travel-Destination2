import './Tours.css' ;
import Tour from './tour/Tour' ;
import TourDetails from './../TourDetails/TourDetails' ;
import { useState } from 'react';
const data = require('../../data/db.json')

function Tours (){
   
return (
<>
<h3> Tours List</h3>
{
data.map((item) =>{
  
    return (
        <div key={item.id} >
<Tour  tour ={item} />
        </div>
    )
})
}
</>
) ;

}


export default Tours ;