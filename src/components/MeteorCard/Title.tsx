import React from 'react'
import './style.scss'

interface Props {
    title: string
}

const Title: React.FC<Props> = ({ title }) => {
    return <span className="title">{title}</span>
  }

export default Title
