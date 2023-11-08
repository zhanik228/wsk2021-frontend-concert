import Countdown from "../countdown/Countdown"
import Button from "../../atoms/button/Button"

const SeatingSidebar = ({ selectedSeats, onClickDetails, changeSeats }) => {
    return (
        <aside className="border p-3 border-dark">
                <h2>Selected Seats</h2>
                {selectedSeats.map((selectedSeat, index) => 
                    <p key={index}>Row: {selectedSeat.row}, Seat: {selectedSeat.seat}</p>
                )}
                <Countdown selectedSeats={selectedSeats} />
                <Button
                    onClick={onClickDetails}
                >{changeSeats ? 'Change Seats' : 'Enter Booking Details'}</Button>
        </aside>
    )
}

export default SeatingSidebar