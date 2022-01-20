import React from 'react'
import './style.scss'

export interface Props {
  key: number | string
  TitleComponent: JSX.Element
  ContentComponent: JSX.Element
}

const Card: React.FC<Props> = ({ key, TitleComponent, ContentComponent }) => {
  return (
    <div key={key} className="card">
      {TitleComponent}
      {ContentComponent}
    </div>
  )
}

export default Card
