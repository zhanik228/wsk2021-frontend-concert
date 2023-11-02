import { useEffect, useState } from "react"
import instance from "../../axios/instance/instance"

export const useFetch = (url, params, query) => {
    const [concerts, setConcerts] = useState([])
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getConcerts = async () => {
            try {
                setLoading(true)
                const response = await instance.get('concerts')
                console.log(response)
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
    }, [])

    return {
        errors,
        loading,
        concerts
    }
}