import * as protobuf from 'protobufjs'
import { Weather } from 'types'

const decodeWeather = async (buffer: Buffer) => {
    const root = await protobuf.load('src/protos/weather.proto')
    const weatherMessage = root.lookupType('weather.WeatherMessage')

    const message = weatherMessage.decode(new Uint8Array(buffer))

    const weather = weatherMessage.toObject(message) as Weather

    return weather
}

export { decodeWeather }
