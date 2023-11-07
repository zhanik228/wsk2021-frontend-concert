import { useEffect, useState } from "react"
import instance from "../../axios/instance/instance"

export const useSeatings = (concertId, showId) => {
    const [seatings, setSeatings] = useState([])
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            const getConcerts = async () => {
                try {
                    setLoading(true)
                    const response = await instance.get(`concerts/${concertId}/shows/${showId}/seating`)
                    // localStorage.setItem('concerts', JSON.stringify(response.data.concerts))
                    setSeatings(prevConcerts => [...prevConcerts, ...response.data])
                    setLoading(false)
                } catch (error) {
                    console.error(error)
                    setErrors(error)
                } finally {
                    setLoading(false)
                }
            }
            getConcerts()
    }, [])

    return {
        errors,
        loading,
        seatings
    }
}