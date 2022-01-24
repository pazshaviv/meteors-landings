import React from 'react'
import './style.scss'

interface Props {
  TitleComponent: JSX.Element
  ContentComponent: JSX.Element
}

const Card: React.FC<Props> = ({ TitleComponent, ContentComponent }) => {
  return (
    <div className="card">
      {TitleComponent}
      {ContentComponent}
    </div>
  )
}

export default Card
