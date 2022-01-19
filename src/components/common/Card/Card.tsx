import React from 'react'
import './style.scss'

export interface Props {
  TitleComponent: React.FC
  ContentComponent: React.FC
}

const Card: React.FC<Props> = ({ TitleComponent, ContentComponent }) => {
  return (
    <div className="card">
      {<TitleComponent />}
      {<ContentComponent />}
    </div>
  )
}

export default Card
