import React, { useEffect, useState } from 'react';
import MeteorsListContainer from './components/MeteorsListContainer/MeteorsListContainer'
import './style.scss'

interface Meteor {
  id: string;
  key: string;
  name: string;
  year?: string;
  mass?: string | 'Not available';
}

const App: React.FC  = () => {
  const [meteors, setMeteors] = useState<any[]>([])

  const cleanMeteorsData = (rawData: Meteor[]) => {
    const filtered = rawData.filter(meteor => {
      return meteor.year != undefined
    })

    return filtered.map((meteor) => {
        const year = new Date(meteor.year as string)

        return {
          id: meteor.id,
          name: meteor.name,
          year: year.getFullYear().toString(),
          mass: meteor.mass && parseInt(meteor.mass)
        }
    })
  }

  useEffect(()=>{
    const nasa_url = 'https://data.nasa.gov/resource/y77d-th95.json'

    const fetchData = async () => {
      try {
        const response = await fetch(nasa_url)
        const json = await response.json()

        setMeteors(cleanMeteorsData(json))
      } catch (error) {
        console.log('error', error)  
      }
    } 

    fetchData()
  }, [])

  return (
    <div className="App">
      <MeteorsListContainer meteors={meteors} />
    </div>
  );
}

export default App;
