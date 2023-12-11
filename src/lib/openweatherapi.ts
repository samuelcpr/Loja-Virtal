import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

const openwaetherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/geo/1.0/',
})

export async function getLocationFromApi(lat: number, long: number) {
  return await openwaetherApi.get(
    `reverse?lat=${lat}&lon=${long}&limit=${1}&appid=${API_KEY}`,
  )
}
