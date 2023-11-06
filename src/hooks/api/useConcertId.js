import { useEffect, useState } from "react"
import instance from "../../axios/instance/instance"

export const useConcert = (concertId) => {
    const [concert, setConcert] = useState(null)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!(localStorage.getItem('concert') && (localStorage.getItem('concert').id == concertId))) {
            const getConcert = async () => {
                try {
                    setLoading(true)
                    const response = await instance.get(`concerts/${concertId}`)
                    localStorage.setItem('concert', JSON.stringify(response.data))
                    setConcert(response.data)
                    setLoading(false)
                } catch (error) {
                    console.error(error)
                    setErrors(error)
                } finally {
                    setLoading(false)
                }
            }
            getConcert()
        } else {
            setConcert(localStorage.getItem('concert'))
        }
    }, [])

    return {
        errors,
        loading,
        concert
    }
}