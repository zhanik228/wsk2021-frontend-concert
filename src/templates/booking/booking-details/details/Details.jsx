import Button from "../../../../atoms/button/Button"

const Details = () => {
    return (
        <div
        className="border border-dark p-2"
        >
            <h2>Please enter your details</h2>
            <form className="d-flex justify-content-between gap-4">
                <div className="d-flex flex-column">
                <label htmlFor={'name'}>Name</label>
                <input id="name" type="text" placeholder="name" />
                <label>Address</label>
                <input type="text" placeholder="Address" />
                <label>Zip Code</label>
                <input type="text" placeholder="040000" />
                <label>City</label>
                <input type="text" placeholder="city" />
                </div>
                <div>
                <p>By clicking Book you accept that you are not actually booking</p>
                <Button>Book</Button>
                </div>
            </form>
        </div>
    )
}

export default Details