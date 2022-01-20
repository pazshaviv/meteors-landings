import React from 'react'
import Card, { Props as CardProps } from '../Card/Card'

import './style.scss'

interface Props {
  cardsData: CardProps[]
}

const CardsList: React.FC<Props> = ({ cardsData }) => {
  return (
    <div className="cards-list-container">
      <div className="cards-list">
        {
          cardsData.map((cardData) => {
            return <Card
              key={cardData.key}
              TitleComponent={cardData.TitleComponent}
              ContentComponent={cardData.ContentComponent}
            />
          })
        }
      </div>
    </div>
  )
}

export default CardsList
