import React from 'react'
import MeteorCard from '../MeteorCard/MeteorCard'
import { Meteor } from '../../common/interfaces'
import CardsList from '../../components/common/CardsList/CardsList'
import './style.scss'

interface Props {
  meteors: Meteor[]
}

const MeteorsList: React.FC<Props> = ({ meteors }) => {
  const meteorCards = meteors.map(meteor => {
    return <MeteorCard key={meteor.id} meteor={meteor} />
  })

  return (
    <CardsList cards={meteorCards} />
  )
}

export default MeteorsList
