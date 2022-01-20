import React from 'react'
import { Meteor } from '../../common/interfaces'
import CardsList from '../../components/common/CardsList/CardsList'
import CardContentComponent from '../MeteorCard/Content'
import CardTitleComponent from '../MeteorCard/Title'
import './style.scss'

interface Props {
  meteors: Meteor[]
}

const MeteorsList: React.FC<Props> = ({ meteors }) => {
  const meteorCardsData = meteors.map(meteor => {
    
    return {
      key: meteor.id,
      TitleComponent: <CardTitleComponent title={meteor.name}/>,
      ContentComponent: (
        <CardContentComponent
          year={meteor.year}
          mass={meteor.mass}
          coords={meteor.coords} 
        />
      )
    }
  })

  return (
    <CardsList cardsData={meteorCardsData} />
  )
}

export default MeteorsList
