import React from 'react'
import './CardFeature.css'

function CardFeature(props) {

  const { title, description, picture } = props
  return (
    <div className='card-feature-container text-center p-2'>
        <div className='card-feature-avatar mx-auto my-5 pt-2'>
          <img src={picture} alt={`logo ${picture}`}></img>
        </div>
        <h4 className='card-feature-title mx-auto mb-3'>{title}</h4>
        <div className='card-feature-description'>{description}</div>
    </div>
  )
}

export default CardFeature