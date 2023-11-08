import SeatingSidebar from "../../../molecules/seating/SeatingSidebar"
import Details from "./details/Details"

const BookingDetails = ({ seatings, selectedSeats, setSelectedSeats, setSelectedView }) => {
    const handleClickDetails = () => {
        setSelectedView('booking')
    }
    return (
        <div className="container d-flex gap-2">
            <SeatingSidebar 
            changeSeats={true} 
            seatings={seatings} 
            selectedSeats={selectedSeats} 
            onClickDetails={handleClickDetails}
            />
            <Details />
        </div>
    )
}

export default BookingDetails