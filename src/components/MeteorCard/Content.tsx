import React from 'react'
import CardDetail from '../common/CardDetail/CardDetail'
import './style.scss'

interface Props {
  year: string | undefined
  mass: number | undefined
  coords: [number, number]
}

const Content: React.FC<Props> = ({ year, mass, coords }) => {
  return (
    <div className='content-container'>
      <CardDetail
        label='Year:'
        value={year || ''}
      />
      {
        mass ? (
          <CardDetail
            label='Mass:'
            value={mass.toString()}
          />
        ) : null
      }
      {
        coords ? (
          <div className="coordinates-container">
            <p className="coordinates-title">Coordinates</p>
            <CardDetail
              label='X:'
              value={coords[0].toString()}
            />
            <CardDetail
              label='Y:'
              value={coords[1].toString()}
            />
          </div>
        ) : null
      }
    </div>
  )
}

export default Content
