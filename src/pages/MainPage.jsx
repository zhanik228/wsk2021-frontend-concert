import { useMemo } from "react"
import Select from "../atoms/select/Select"
import { useFetch } from "../hooks/api/useFetch"
import { extractConcertArtists, extractConcertLocations } from "../helpers/concert/concertHelpers"

const MainPage = () => {

    const concerts = useFetch()

    const concertArtists = useMemo(() => extractConcertArtists(concerts.concerts), [concerts])
    const concertLocations = useMemo(() => extractConcertLocations(concerts.concerts), [concerts])

    const handleSelect = (callback) => {
        console.log(callback.target.value)
    }

    return (
        <section className="container">
            <h2 className="my-3 text-center">
                Checkout these amazing concerts in Graz
            </h2>
            <div className="d-flex justify-content-center gap-4">
                <Select 
                defaultOption={'Artist'} 
                options={concertArtists}
                onSelect={handleSelect} 
                />
                <Select 
                defaultOption={'Location'} 
                options={concertLocations}
                onSelect={handleSelect} 
                />
                <input type="date" />
            </div>
        </section>
    )
}

export default MainPage