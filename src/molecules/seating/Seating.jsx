
const Seating = (props) => {
    const { className } = props

    return (
        <section className={`
        ${className} 
        border
        border-primary
        rounded
        p-2
        `}>
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
        </section>
    )
}

export default Seating