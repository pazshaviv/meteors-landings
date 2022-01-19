import React from 'react'
import './style.scss' 

interface Props {
  label: string
  value: string
}

const CardDetail: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="detail-container">
      <label>{label}</label>
      <span>{value}</span>
    </div>
  )
}

export default CardDetail
