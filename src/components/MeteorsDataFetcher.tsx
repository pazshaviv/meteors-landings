import React, { useEffect, useState } from 'react'
import { MeteorDTO, fetchMeteorsList } from '../api'
import MeteorsAppContainer from './MeteorsApp/MeteorsAppContainer'
import { Meteor } from '../common/interfaces'

const MeteorsDataFetcher: React.FC = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const meteorsData = await fetchMeteorsList()
      const modifiedData = filteredMeteorsData(meteorsData)
      setMeteors(modifiedData)
    }

    fetchData()
  }, [])

  return <MeteorsAppContainer meteors={meteors} />
}

const filteredMeteorsData = (rawData: MeteorDTO[]) => {
  const filtered = rawData.filter(({ year }) => year)

  return filtered.map((meteor) => {
    const extractedYear = new Date(meteor.year as string).getFullYear().toString()
    const massAsNumber = meteor.mass ? parseInt(meteor.mass) : 0

    return {
      id: parseInt(meteor.id),
      name: meteor.name,
      year: extractedYear,
      mass: massAsNumber,
      coords: meteor?.geolocation?.coordinates
    }
  })
}

export default MeteorsDataFetcher
