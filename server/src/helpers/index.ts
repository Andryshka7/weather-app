import { Weather } from 'types'
import * as protobuf from 'protobufjs'

const parseWeatherObject = (data: any) => {
    const { region, country } = data.location
    const {
        temp_c: temp,
        feelslike_c: feelslike,
        condition: { icon, text: conditions }
    } = data.current

    return { temp, feelslike, icon, conditions, region, country } as Weather
}

const encodeWeather = async (payload: Weather): Promise<Uint8Array> => {
    const root = await protobuf.load('src/protos/weather.proto')
    const weatherMessage = root.lookupType('weather.WeatherMessage')

    const message = weatherMessage.create(payload)
    const buffer = weatherMessage.encode(message).finish()

    return buffer
}
export { encodeWeather, parseWeatherObject }
