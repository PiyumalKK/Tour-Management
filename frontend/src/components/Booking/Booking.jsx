import React from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem,Button } from 'reactstrap'

const Booking = ({tour, avgRating}) => {

const {price,reviews} = tour

  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price}<span>/per person</span></h3>
            <span className='tour__rating d-flex align-items-center'>
                 <i class="ri-star-fill" style={{'color':"var(--secondary-color)"}}></i> {avgRating===0?null:avgRating} ({reviews?.length})
                
                 
                 </span>

        </div>
     

    </div>
  )
}

export default Booking