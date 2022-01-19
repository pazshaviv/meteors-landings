import React from 'react'
import { Meteor } from '../../common/interfaces'
import CardDetail from '../common/CardDetail/CardDetail'
import Card from '../common/Card/Card'
import './style.scss'

export interface Props {
  meteor: Meteor
}

const MeteorCard: React.FC<Props> = ({ meteor }) => {
  const TitleComponent: React.FC = () => {
    return <span className="title">{meteor.name}</span>
  }

  const ContentComponent: React.FC = () => {
    return (
      <div className='content-container'>
        <CardDetail
          label='Year:'
          value={meteor?.year || ''}
        />
        {
          meteor.mass ? (
            <CardDetail
              label='Mass:'
              value={meteor.mass.toString()}
            />
          ) : null
        }
        {
          meteor.coords ? (
            <div className="coordinates-container">
              <p className="coordinates-title">Coordinates</p>
              <CardDetail
                label='X:'
                value={meteor.coords[0].toString()}
              />
              <CardDetail
                label='Y:'
                value={meteor.coords[1].toString()}
              />
            </div>
          ) : null
        }
      </div>
    )
  }

  return (
    <Card
      key={meteor.id}
      TitleComponent={TitleComponent}
      ContentComponent={ContentComponent}
    />
  )
}

export default MeteorCard
