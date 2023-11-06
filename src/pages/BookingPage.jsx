import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useConcert } from "../hooks/api/useConcertId"
import Card from "../molecules/card/Card"
import { extractShow, extractShows } from "../helpers/concert/concertHelpers"
import Seating from "../molecules/seating/Seating"

const BookingPage = () => {
    const params = useParams()
    const concertId = params.concertId
    const showId = params.showId

    const concert = useConcert(concertId)
    const changedConcert = useMemo(() => extractShow(concert.concert, showId), [concert.concert])
    console.log(changedConcert)

    return (
        <div>
            <h2 className="container text-center section-margin">Book seats for your show</h2>
            <Card className={'container section-margin'} card={changedConcert && changedConcert[0]} />
            <Seating className={'container'} />
        </div>
    )
}

export default BookingPage