import { useMemo } from "react"

const SeatingRow = (props) => {
    const { seatings, onSeatSelect } = props

    console.log(seatings)
    const totalArray = useMemo(() => {
        if (seatings.length > 0) {
            seatings.map(seating => {
                const createArray = Array(seating.seats.total).fill()
        
                createArray.map((seat, index) => {
                    createArray[index] = {
                        id: Math.random() + Date.now(),
                        status: 'available',
                        number: index + 1
                    }
                })

                seating.seats.unavailable.map((unavailable) => {
                    createArray[unavailable-1] = {
                        ...createArray[unavailable-1],
                        status: 'unavailable'
                    }
                })

                seating.seats.total = createArray
                
            })
        }
        return seatings
    }, [seatings])

    return (
        <div className="p-2">
            {totalArray.map(seating => (
                <div className="d-flex align-items-center border gap-5 p-2" key={seating.name}>
                <span>{seating.name}</span>
                <div className="d-flex flex-wrap gap-2 border p-2">
                {totalArray.length > 0 && seating.seats.total.map((number, index) => {
                    return <div
                    className={`
                    d-flex
                    justify-content-center
                    align-items-center
                    border
                    border-dark
                    p-1
                    row-rounded
                    ${number.status === 'unavailable' ? 'unavailable' : ''}
                    `}
                    key={number.number}
                    onClick={() => onSeatSelect({
                        id: number.id,
                        row: seating.name,
                        seat: number.number
                    }, window.event)}
                    >{number.number}</div>
                })}
                </div>
                </div>
            ))}
        </div>
    )
}

export default SeatingRow