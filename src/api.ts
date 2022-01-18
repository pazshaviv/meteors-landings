const nasa_url = 'https://data.nasa.gov/resource/y77d-th95.json'

export interface MeteorDTO {
    id: string;
    name: string;
    year?: string;
    mass?: string;
    geolocation: {
        type: string;
        coordinates: [number, number]
    };
}

export const fetchMeteorsList = async () => {
  try {
    const response = await fetch(nasa_url)
    const json = await response.json()

    return json
  } catch (error) {
    console.log('error', error)
    return []
  }
}
