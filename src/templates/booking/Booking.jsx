import { useParams, useSearchParams } from "react-router-dom"
import SeatingRow from "../../molecules/seating/SeatingRow"
import { useSeatings } from "../../hooks/api/useSeatings"
import { useState } from "react"
import Button from "../../atoms/button/Button"
import Countdown from "../../molecules/countdown/Countdown"
import SeatingSidebar from "../../molecules/seating/SeatingSidebar"

const Booking = (props) => {
    const { className, seatings, onClickDetails, selectedSeats, setSelectedSeats } = props

    const handleSeatSelect = (seating, event) => {
        const selectedElem = event.target
        if (selectedElem.classList.contains('selected')) {
            let indexToRemove = selectedSeats.findIndex((seat) => {
                return seating.id === seat.id
            })
            setSelectedSeats(prevSelectedSeat => prevSelectedSeat.filter((seat, index) => index !== indexToRemove))
            console.log(indexToRemove)
            selectedElem.classList.remove('selected')
        } else if (!selectedElem.classList.contains('unavailable')) {
            selectedElem.classList.add('selected')
            setSelectedSeats((prevSelectedSeat) => [...prevSelectedSeat, seating])
        }
    }

    return (
        <section className={`
        container
        d-flex
        justify-content-between
        `}>
            <section className="
            border
            border-dark
            ">
                <h2 className="
                d-flex 
                justify-content-center 
                align-items-center
                bg-dark
                text-light
                p-2
                container
                ">Stage
                </h2>
                <SeatingRow onSeatSelect={handleSeatSelect} seatings={seatings} />
            </section>
            <SeatingSidebar onClickDetails={onClickDetails} selectedSeats={selectedSeats} />
        </section>
    )
}

export default Booking