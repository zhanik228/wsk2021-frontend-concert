import { useEffect, useState } from "react"
import instance from "../../axios/instance/instance"

export const useConcerts = () => {
    const [concerts, setConcerts] = useState([])
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('concerts')) {
            const getConcerts = async () => {
                try {
                    setLoading(true)
                    const response = await instance.get('concerts')
                    localStorage.setItem('concerts', JSON.stringify(response.data.concerts))
                    setConcerts(prevConcerts => [...prevConcerts, ...response.data.concerts])
                    setLoading(false)
                } catch (error) {
                    console.error(error)
                    setErrors(error)
                } finally {
                    setLoading(false)
                }
            }
            getConcerts()
        } else {
            setConcerts(JSON.parse(localStorage.getItem('concerts')))
        }
    }, [])

    return {
        errors,
        loading,
        concerts
    }
}