import React, { useEffect, useState, useMemo } from 'react'
import useFetch from '../common/useFetch'
import MeteorsScreenContainer from './MeteorsScreen/MeteorsScreenContainer'
import { Meteor } from '../common/interfaces'

const nasa_url = 'https://data.nasa.gov/resource/y77d-th95.json'

type MeteorDTO = {
  id: string
  name: string
  year?: string
  mass?: string
  geolocation: {
    type: string
    coordinates: [number, number]
  }
}

const MeteorsApp: React.FC = () => {
  const { data, loading, error } = useFetch<MeteorDTO[]>(nasa_url)

  const meteors = data ? filteredMeteorsData(data) : []

  if(loading) return <h1>loading data...</h1>
  if(error) console.log(error)
  
  return <MeteorsScreenContainer meteors={meteors} /> 
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

export default MeteorsApp
