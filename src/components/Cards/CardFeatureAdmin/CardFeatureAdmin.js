import React from 'react'
import './CardFeatureAdmin.css'

function CardFeatureAdmin(props) {

  const { title, description, picture } = props
  return (
    <div className='card-container p-4 d-flex align-items-center'>
        <div className='card-avatar mx-1 col-3'>
          <img src={picture} alt={`logo ${picture}`}></img>
        </div>
        <div className="card-content col-9">
            <h5 className='card-title'>{title}</h5>
            <h6 className='card-description mt-1'>{description}</h6>
        </div>
    </div>
  )
}

export default CardFeatureAdmin