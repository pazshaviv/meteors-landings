import React from 'react'
import './style.scss'

interface Props {
  label: string
  value: string
}

const CardDetail: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="detail-container">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  )
}

export default CardDetail
