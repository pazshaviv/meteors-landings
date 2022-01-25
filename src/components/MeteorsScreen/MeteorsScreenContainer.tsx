import React, { useState, useMemo } from 'react'
import { Meteor } from '../../common/interfaces'
import { filterByYear, filterByMass } from './utils'
import MeteorsScreen from './MeteorsScreen'

interface Props {
  meteors: Meteor[]
}

const NOT_FOUND_FOR_YEAR_TEXT = 'Mass wasn\'t found, jumping to first-year where there is a mass that fits the criteria.'
const NOT_FOUND_TEXT = 'No meteors for that mass and year'

const MeteorsScreenContainer: React.FC<Props> = ({ meteors }) => {
  const [yearFilter, setYearFilter] = useState<string>('')
  const [massFilter, setMassFilter] = useState<number>(0)
  const [displayMessage, setDisplayMessage] = useState('')

  const displayNotFoundMessage = (text: string): void => {
    setDisplayMessage(text)

    setTimeout(() => setDisplayMessage(''), 3000)
  }

  const filterByYearAndMass = () => {
    const filteredByYear = filterByYear(yearFilter, meteors)
    if (massFilter == 0) return filteredByYear

    const filteredByMassAndYear = filterByMass(massFilter, filteredByYear)
    if (filteredByMassAndYear.length > 0) return filteredByMassAndYear

    const differentYearMeteor = meteors.find(meteor => meteor.mass && meteor.mass >= massFilter)
    if (!differentYearMeteor) {
      displayNotFoundMessage(NOT_FOUND_TEXT)
      return []
    }

    const year = differentYearMeteor?.year as string || ''
    setYearFilter(year)
    displayNotFoundMessage(NOT_FOUND_FOR_YEAR_TEXT)
    return []
  }

  const meteorsToDisplay = useMemo(() => filterByYearAndMass(), [yearFilter, massFilter])

  const handleYearFilterUpdate = (filterValue: string) => {
    setYearFilter(filterValue)
  }

  const handleMassFilterUpdate = (filterValue: number) => {
    setMassFilter(filterValue)
  }

  const getYearsList = (): string[] => {
    const years = new Set<string>()
    meteors.forEach(meteor => {
      if (meteor.year) years.add(meteor.year as string)
    })

    return Array.from(years)
  }

  return (
    <MeteorsScreen
      onYearFilterUpdate={handleYearFilterUpdate}
      onMassFilterUpdate={handleMassFilterUpdate}
      yearOptions={getYearsList()}
      yearFilter={yearFilter}
      displayMessage={displayMessage}
      meteorsToDisplay={meteorsToDisplay}
    />
  )
}

export default MeteorsScreenContainer