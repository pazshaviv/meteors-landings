import React, { useEffect, useState } from 'react';
import MeteorsListContainer from './components/MeteorsListContainer/MeteorsListContainer'
import { MeteorDTO, fetchMeteorsList} from './api'
import './style.scss'

interface Meteor {
  id: string;
  name: string;
  year?: string;
  mass?: number | 0;
}

const App: React.FC  = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(()=>{
    const fetchData = async () => {
      const meteorsData = await fetchMeteorsList()
      const cleaned = cleanMeteorsData(meteorsData)
      setMeteors(cleaned)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <MeteorsListContainer meteors={meteors} />
    </div>
  );
}

const cleanMeteorsData = (rawData: MeteorDTO[]) => {
  const filtered = rawData.filter(({ year }) => year)

  return filtered.map((meteor) => {
      const extractedYear = new Date(meteor.year as string).getFullYear().toString()
      const massAsNumber = meteor.mass ? parseInt(meteor.mass) : 0

      return {
        id: meteor.id,
        name: meteor.name,
        year: extractedYear,
        mass: massAsNumber
      }
  })
}

export default App;
