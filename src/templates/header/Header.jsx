import Button from "../../atoms/button/Button"

const Header = () => {
    const btnClick = (callback) => {
        console.log(callback.target)
    }

    return (
        <header className="p-2 bg-light">
            <div className="container d-flex justify-content-between align-items-center">
                <h2>EuroSkills Concerts</h2>
                <div className="d-flex align-items-center">
                    <span className="mx-3">Already booked?</span>
                    <Button onClick={btnClick}>Get Tickets</Button>
                </div>
            </div>
        </header>
    )
}

export default Header