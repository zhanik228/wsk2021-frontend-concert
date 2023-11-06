import { Link } from "react-router-dom"

const Card = ({ card, className }) => {
    if (!card) {
        return 'no card'
    }

    return (
        <div className={`
        position-relative
        border border-dark p-2 rounded text-center ${className}`}>
            <Link 
                className="
                position-absolute
                border
                w-100
                start-0
                end-0
                top-0
                bottom-0
                "
                to={`/booking/concert/${card.concertId}/show/${card.showId}`}
            />
            <p>{card.date}</p>
            <h2>{card.concertArtist}</h2>
            <p>{card.location && card.location.locationName}</p>
            <p>{`${card.start} - ${card.end}`}</p>
        </div>
    )
}

export default Card