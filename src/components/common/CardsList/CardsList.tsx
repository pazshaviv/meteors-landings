import React from 'react'
import Card from '../Card/Card'

import './style.scss'

interface CardDataProps {
  id: string | number
  TitleComponent: JSX.Element
  ContentComponent: JSX.Element
}

interface Props {
  cardsData: CardDataProps[]
}

const CardsList: React.FC<Props> = ({ cardsData }) => {
  return (
    <div className="cards-list-container">
      <div className="cards-list">
        {
          cardsData.map((cardData) => {
            return <Card
              key={cardData.id}
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
