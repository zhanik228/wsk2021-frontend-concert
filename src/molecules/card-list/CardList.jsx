import Card from "../card/Card"

const CardList = ({ cards }) => {
    if (!cards) {
        return 'no cards'
    }
    let i = 0

    return (
        <div className="row">
            {cards.map((card) => {
                return (
                <Card
                    key={card.showId}
                    className={'col-sm-3'}
                    card={card}  
                />
                )
            })}
        </div>
    )
}

export default CardList