import { Weather } from 'types'
import * as protobuf from 'protobufjs'

const parseWeatherObject = (data: any) => {
    const { region, country } = data.location
    const {
        temp_c,
        feelslike_c,
        condition: { icon, text: conditions }
    } = data.current

    return { temp_c, feelslike_c, icon, conditions, region, country } as Weather
}

const encodeWeather = (payload: Weather) => {
    protobuf.load('weather.proto', function (err, root) {
        if (err) throw err

        const weather = root.lookupType('weather.WeatherMessage')
        const message = weather.create(payload)
        const buffer = weather.encode(message).finish()

        return buffer
    })
}

export { encodeWeather, parseWeatherObject }
