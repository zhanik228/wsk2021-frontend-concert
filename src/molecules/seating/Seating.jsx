import { useParams, useSearchParams } from "react-router-dom"
import SeatingRow from "./SeatingRow"
import { useSeatings } from "../../hooks/api/useSeatings"

const Seating = (props) => {
    const { className } = props
    const params = useParams()
    const concertId = params.concertId
    const showId = params.showId
    const seatings = useSeatings(concertId, showId).seatings

    return (
        <section className={`
        container
        d-flex
        justify-content-between
        `}>
            <section className="
            border 
            rounded 
            border-dark
            w-75
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
                <SeatingRow seatings={seatings} />
            </section>
            <aside className="border p-3 border-dark">
                <h2>Selected Seats</h2>
                <p>Row: Stall 03, Seat: 6</p>
            </aside>
        </section>
    )
}

export default Seating