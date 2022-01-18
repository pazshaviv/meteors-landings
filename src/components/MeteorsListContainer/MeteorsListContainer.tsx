import React, { useEffect, useState } from 'react';
import Filters from '../Filters/Filters'
import MeteorsList from '../MeteorsList/MeteorsList'
import './style.scss'

interface Meteor {
  id: string;
  name: string;
  year?: string;
  mass?: number;
}

interface Props {
  meteors: Meteor[]
}

const MeteorsListContainer: React.FC<Props> = ({ meteors }) => {
  const [yearFilter, setYearFilter] = useState<string>('')
  const [massFilter, setMassFilter] = useState<number>(0)
  const [meteorsToDisplay, setMeteorsToDisplay] = useState<Meteor[]>([])
  const [displayMessage, setDisplayMessage] = useState(false)
  
  useEffect(() => {
    setMeteorsToDisplay(filterMeteors())
  }, [yearFilter, massFilter])
  
  const NotFoundElement = () => {
    return (
      displayMessage ?
      <p className='not-found-message'>
        Mass wasn't found, jumping to first-year where there is a mass that fits the criteria.
      </p> : null
    )
  }

  function displayNotFoundMessage() {
    setDisplayMessage(true)

    setTimeout(function(){
      setDisplayMessage(false)
    }, 3000)
  }

  const filterByYear = (year: string) => {
    if(yearFilter == '') return []

    return meteors.filter(function(meteor){
      return meteor.year != undefined && meteor.year.includes(year)
    })
  }

  const filterByMass = (mass: number, meteorsToFilter: Meteor[]) => {
    return meteorsToFilter.filter(function(meteor: Meteor){
      return meteor.mass && meteor.mass >= massFilter
    })
  }

  const filterMeteors = () => {
    const filteredByYear = filterByYear(yearFilter)
    
    if(massFilter == 0){
      return filteredByYear
    } else {
      const filteredByMass = filterByMass(massFilter, filteredByYear)
      if(filteredByMass.length > 0) return filteredByMass
      else {
        const meteor = meteors.find(meteor => meteor.mass && meteor.mass >= massFilter)
        const year = meteor?.year as string || ''
        setYearFilter(year)
        displayNotFoundMessage()
      }
    }

    return []
  }

  const handleYearFilterUpdate = (filterValue: string) => {
    setYearFilter(filterValue)
  }

  const handleMassFilterUpdate = (filterValue: number) => {
    setMassFilter(filterValue)
  }

  function getYearsList(): string[] {
    const years = new Set<string>()
    meteors.forEach(meteor => {
      if(meteor.year) years.add(meteor.year as string)
    })

    return Array.from(years);
  }

  return (
    <div className='app-container'>
      <Filters 
        onYearFilterUpdate={handleYearFilterUpdate}
        onMassFilterUpdate={handleMassFilterUpdate}
        yearOptions={getYearsList()}
        yearFilter={yearFilter}
      />
      <div className='message-container'>
        <NotFoundElement />
      </div>
      <h1>{meteorsToDisplay.length} Meteors Found</h1>
      <MeteorsList meteors={meteorsToDisplay} />
    </div>
  );
}

export default MeteorsListContainer;
