export const extractConcertArtists = (concerts) => {
    let concertArtists = concerts.map((concert) => concert.artist)
    return [...new Set(concertArtists)]
}

export const extractConcertLocations = (concerts) => {
    let concertLocations = concerts.map((concert) => concert.location.name)
    return [...new Set(concertLocations)]
}

export const extractShows = (concerts) => {
    let arr = []
    concerts.map((concert) => {
        concert.shows.map((show) => {
            arr.push({
                concertId: concert.id,
                concertArtist: concert.artist,
                location: {
                    locationId: concert.location.id,
                    locationName: concert.location.name
                },
                showId: show.id,
                date: [show.start.slice(8, 10), show.start.slice(5, 7), show.start.slice(0, 4)].join('/'),
                start: [show.start.slice(11, 13), show.start.slice(14, 16)].join(':'),
                end: [show.end.slice(11, 13), show.end.slice(14, 16)].join(':')
            })
        })
    })
    return arr
}