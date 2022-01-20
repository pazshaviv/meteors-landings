import { useEffect, useState } from 'react'

const useFetch = <DTO>(url: string) => {
  const [data, setData] = useState<DTO | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(url)
        const json = await response.json()

        setData(json)
      } catch {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export default useFetch
