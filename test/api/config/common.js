import * as testData from './testData.json'


const baseUrl = process.env.API_BASE_URL
const apiKey = `&key=${process.env.API_KEY}`

export function requestUrl(path, query) {
    console.log(baseUrl)
    return baseUrl + path + query + apiKey
}

export function requestHeader() {
    return {
        Accept: 'application/json'
    }
}

export function getPostalCode() {
    return `&postal_code=${testData.postal_code.code}`
}

export function getLat() {
    return `&lat=${testData.latlon.lat}`
}

export function getLon() {
    return `&lon=${testData.latlon.lon}`
}
