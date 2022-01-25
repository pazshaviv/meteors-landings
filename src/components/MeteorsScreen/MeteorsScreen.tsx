import React from 'react'
import Filters from '../Filters/Filters'
import MeteorsList from '../MeteorsList/MeteorsList'
import { Meteor } from '../../common/interfaces'
import './style.scss'

interface Props {
  onYearFilterUpdate: (filterValue: string) => void
  onMassFilterUpdate: (filterValue: number) => void
  yearOptions: string[]
  yearFilter: string
  displayMessage: string
  meteorsToDisplay: Meteor[]
}

const MeteorsScreen: React.FC<Props> = (
  {
    onYearFilterUpdate,
    onMassFilterUpdate,
    yearOptions,
    yearFilter,
    meteorsToDisplay,
    displayMessage
  }) => {

  const NotFoundElement = () => {
    return (
      displayMessage ?
        <p className="not-found-message">
          {displayMessage}
        </p> : null
    )
  }

  return (
    <div className="app-container">
      <Filters
        onYearFilterUpdate={onYearFilterUpdate}
        onMassFilterUpdate={onMassFilterUpdate}
        yearOptions={yearOptions}
        yearFilter={yearFilter}
      />
      <div className="message-container">
        <NotFoundElement />
      </div>
      <h1 className="meteors-list-title">{meteorsToDisplay.length} Meteors Found</h1>
      <MeteorsList meteors={meteorsToDisplay} />
    </div>
  )
}

export default MeteorsScreen
