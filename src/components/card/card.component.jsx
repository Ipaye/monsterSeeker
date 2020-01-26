import React from 'react'
import './card.style.css'

export const Card = props => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${props.monster.id}.png?set=set2&size=180x180`} alt="" />
      <h6>{props.monster.name}</h6>
    </div>
  )
}
