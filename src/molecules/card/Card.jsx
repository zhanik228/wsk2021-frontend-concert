
const Card = ({ card, className }) => {
    if (!card) {
        return 'no card'
    }

    console.log(card)

    return (
        <div className={`border border-dark p-2 rounded text-center ${className}`}>
            <p>{card.date}</p>
            <h2>{card.concertArtist}</h2>
            <p>{card.location.locationName}</p>
            <p>{`${card.start} - ${card.end}`}</p>
        </div>
    )
}

export default Card