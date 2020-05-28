import axios from 'axios';

export function geography(city) {
    return axios.get(`http://api.geonames.org/searchJSON?q=${city}&maxRows=20&startRow=0&lang=en&isNameRequired=true&style=FULL&username=ilgeonamessample`)
}

export function meteorology(north, south, east, west) {
    return axios.get(`http://api.geonames.org/weatherJSON?north=${north}&south=${south}&east=${east}&west=${west}&username=ilgeonamessample`)
}