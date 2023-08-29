import React from 'react'
import './CardMember.css'

function CardMember(props) {

  const { title, description, picture, classNames } = props
  return (
    <div className={`card-container p-2 ${classNames}`}>
        <div className='card-avatar my-4'>
          <img src={picture} alt={`logo ${picture}`}></img>
        </div>
        <div className="card-content d-flex">
            <h3 className='card-title mx-auto mb-3'>{title}</h3>
            <div className='card-description'>{description}</div>
        </div>
    </div>
  )
}

export default CardMember