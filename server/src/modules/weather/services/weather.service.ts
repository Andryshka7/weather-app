import { Injectable } from '@nestjs/common'
import { WEATER_API_URL, WEATER_API_KEY } from 'config'
import { encodeWeather, parseWeatherObject } from 'helpers'
import { Weather } from 'types'

@Injectable()
export class WeatherService {
    async getCurrentWearher(lat: string, long: string) {
        const response = await fetch(`${WEATER_API_URL}?key=${WEATER_API_KEY}&q=${lat},${long}`)
        const data = (await response.json()) as Weather
        const weather = parseWeatherObject(data)
        return await encodeWeather(weather)
    }
}
