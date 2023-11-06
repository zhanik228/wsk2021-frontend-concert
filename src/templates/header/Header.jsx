import { Link } from "react-router-dom"
import Button from "../../atoms/button/Button"

const Header = () => {
    const btnClick = (callback) => {
        console.log(callback.target)
    }

    return (
        <header className="p-2 bg-light">
            <div className="container d-flex justify-content-between align-items-center">
                <h2 className="position-relative">
                    <Link className="
                    position-absolute
                    start-0
                    end-0
                    top-0
                    bottom-0
                    "
                    to={'/'}
                    />
                    EuroSkills Concerts
                </h2>
                <div className="d-flex align-items-center">
                    <span className="mx-3">Already booked?</span>
                    <Button onClick={btnClick}>Get Tickets</Button>
                </div>
            </div>
        </header>
    )
}

export default Header