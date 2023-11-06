import { useMemo, useRef, useState } from "react"
import React from "react"
import Select from "../atoms/select/Select"
import { useConcerts } from "../hooks/api/useConcerts"
import { extractConcertArtists, extractConcertLocations, extractShows } from "../helpers/concert/concertHelpers"
import Card from "../molecules/card/Card"
import CardList from "../molecules/card-list/CardList"

const MainPage = () => {
    const [selectedArtist, setSelectedArtist] = useState(null)
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [selectedDate, setSelectedDate] = useState('')

    let concerts = useConcerts()

    const selectInputRef = React.createRef()
    const selectLocationRef = React.createRef()
    const selectDateRef = React.createRef()

    const concertArtists = useMemo(() => extractConcertArtists(concerts.concerts), [concerts.concerts])
    const concertLocations = useMemo(() => extractConcertLocations(concerts.concerts), [concerts.concerts])
    const concertShows = useMemo(() => extractShows(concerts.concerts), [concerts.concerts])

    const handleArtistSelect = (callback) => {
        let value = callback.target.value
        setSelectedArtist(value)
    }

    const handleLocationSelect = (callback) => {
        let value = callback.target.value
        setSelectedLocation(value)
    }

    const handleDate = (event) => {
        const date = event.target.value
        const newDate = new Date(date)
        const day = String(newDate.getDate()).padStart(2, 0)
        const month = newDate.getMonth() + 1
        const year = newDate.getFullYear()
        const combinedDate = [day, month, year].join('/')
        setSelectedDate(combinedDate)
    }

    const sortedShows = useMemo(() => {
        return [...concertShows].filter((concert) => {
            if (!selectedArtist && !selectedLocation && !selectedDate) {
                return true
            }
            return (!selectedArtist || selectedArtist === concert.concertArtist) && 
               (!selectedLocation || selectedLocation === concert.location.locationName) &&
               (!selectedDate || selectedDate === concert.date);
        })
    }, [selectedArtist, selectedLocation, concertShows, selectedDate])
    
    const clearFilter = () => {
        setSelectedArtist(null)
        setSelectedLocation(null)
        selectDateRef.current.value = ''
        setSelectedDate('')
        // console.log(selectInputRef.current.select.clearValue())
    }

    return (
        <section>
            <h2 className="my-3 text-center">
                Checkout these amazing concerts in Graz
            </h2>
            <section className="d-flex justify-content-center gap-4">
                <Select 
                ref={selectInputRef}
                defaultOption={'Artist'}
                value={selectedArtist} 
                options={concertArtists}
                onSelect={handleArtistSelect} 
                />
                <Select 
                ref={selectLocationRef}
                defaultOption={'Location'} 
                value={selectedLocation}
                options={concertLocations}
                onSelect={handleLocationSelect} 
                />
                <input ref={selectDateRef} type="date" onChange={handleDate}/>
                {(selectedArtist || selectedLocation) && 
                    <button
                        onClick={clearFilter}
                    >Очистить фильтры</button>
                }
            </section>
            <div className="container section-margin">
                <CardList cards={sortedShows} />
            </div>
        </section>
    )
}

export default MainPage