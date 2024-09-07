import React from 'react'
import "./CarCard.css"

const CarCard = ({car}) => {
  return (
    <div>
      <div className="card">
        <div className="car-name">{car.carName}</div>
        <div className='sub-name'><b><i>Brand</i></b> : {car.brandName}</div>
        <div className='sub-name'><b><i>Color</i></b> : {car.carColor}</div>
        <div className='sub-name'><b><i>Price</i></b> : {car.carPrice}</div>
      </div>
    </div>
  )
}

export default CarCard
