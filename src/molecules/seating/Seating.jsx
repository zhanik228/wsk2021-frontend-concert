import { useParams, useSearchParams } from "react-router-dom"
import SeatingRow from "./SeatingRow"
import { useSeatings } from "../../hooks/api/useSeatings"
import { useState } from "react"
import Countdown from "../countdown/Countdown"
import Button from "../../atoms/button/Button"
import Booking from "../../templates/booking/Booking"
import BookingDetails from "../../templates/booking/booking-details/BookingDetails"

const Seating = (props) => {
    const { className } = props
    const params = useParams()
    const concertId = params.concertId
    const showId = params.showId
    const seatings = useSeatings(concertId, showId).seatings
    const [selectedView, setSelectedView] = useState('booking')
    const [selectedSeats, setSelectedSeats] = useState([])

    const handleClickDetails = (event) => {
        setSelectedView('booking-details')
    }

    return (
        <>
            {selectedView === 'booking' ?
                <Booking 
                onClickDetails={handleClickDetails}
                seatings={seatings}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                />
            :
                <BookingDetails
                setSelectedView={setSelectedView}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                seatings={seatings} />
            }
        </>
    )
}

export default Seating