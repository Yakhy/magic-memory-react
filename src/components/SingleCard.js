

import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card, handleClick, flipped, disabled }) {
  const handleChoice = () => {
    if (!disabled) {
      handleClick(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="front card" />
        <img
          className="back"
          onClick={handleChoice}
          src="img/cover.png"
          alt="back card"
        />
      </div>
    </div>
  )
}
