import React from 'react'
import MeteorCard from '../MeteorCard/MeteorCard'
import { Meteor } from '../../common/interfaces'
import './style.scss' 

interface Props {
  meteors: Meteor[]
}

const MeteorsList: React.FC<Props> = ({ meteors }) => {
  return (
    <div className="meteors-list-container">
      <div className="meteors-list">
        {
          meteors.map((meteor) => {
            return <MeteorCard key={meteor.id} meteor={meteor}/>
          })
        }
      </div>
    </div>
  )
}

export default MeteorsList
