import { useCallback, useEffect, useState } from "react"

const Countdown = (props) => {
    const { selectedSeats } = props

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [inputDate, setInputDate] = useState(new Date())
    const [addedTime, setAddedTime] = useState(inputDate.setMinutes(inputDate.getMinutes() + 5))
    const [finishTime, setFinishTime] = useState(inputDate.getTime())

    const countdown = useCallback(() => {
        const now = new Date().getTime()
        const gap = finishTime - now

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        setDays(Math.floor(gap / day))
        setHours(Math.floor((gap % day) / hour))
        setMinutes(Math.floor((gap % hour) / minute))
        setSeconds(Math.floor((gap % minute) / second))
    }, [selectedSeats])

    useEffect(() => {
        setInputDate(new Date())
    }, [selectedSeats])

    useEffect(() => {
        const intervalId = setInterval(() => countdown(), 1000);
        return () => clearInterval(intervalId)
    }, [countdown])
    
    return (
        <div>
            <p>Your seats expire in {minutes}:{seconds} </p>
        </div>
    )
}

export default Countdown