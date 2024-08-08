import { useEffect } from 'react'
import { useWeater } from 'hooks'
import socket from 'websocket'
import { Weather, Loader } from 'components'
import { Weather as WeatherType } from 'types'

const App = () => {
    const { state, udpateWeather } = useWeater()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude: lat, longitude: long } = position.coords
            socket.emit('getWeatherUpdate', { lat, long })
        })
        socket.on('weatherUpdate', (data: WeatherType) => udpateWeather(data))
    }, [state])

    return state ? <Weather {...state} /> : <Loader />
}

export default App
