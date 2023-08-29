import React from 'react'
import './CardFeature.css'
import { Link } from 'react-router-dom'

function CardFeature(props) {

  const { title, description, picture, feature_name } = props
  return (
    <div className='card-feature-container text-center p-2'>
        <div className='card-feature-avatar mx-auto my-4 pt-2'>
          <img src={picture} alt={`logo ${picture}`}></img>
        </div>
        <h4 className='card-feature-title mx-auto mb-3'>{title}</h4>
        <div className='card-feature-description mb-4'>{description}</div>
        <Link to={`/features/${feature_name || ""}`}>
          <button className='btn btn-success'>Jelajahi Fitur Ini!</button>
        </Link>
    </div>
  )
}

export default CardFeature