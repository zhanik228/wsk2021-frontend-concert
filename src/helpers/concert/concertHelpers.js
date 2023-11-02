export const extractConcertArtists = (concerts) => {
    let concertArtists = concerts.map((concert) => concert.artist)
    return [...new Set(concertArtists)]
}

export const extractConcertLocations = (concerts) => {
    let concertLocations = concerts.map((concert) => concert.location.name)
    return [...new Set(concertLocations)]
}