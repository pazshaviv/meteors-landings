import React from 'react'
import './style.scss'

interface Props {
  cards: JSX.Element[]
}

const CardsList: React.FC<Props> = ({ cards }) => {
  return (
    <div className="cards-list-container">
      <div className="cards-list">
        {cards.map((card) => card)}
      </div>
    </div>
  )
}

export default CardsList
