import { useEffect } from 'react'
import { useWeater } from 'hooks'
import socket from 'websocket'
import { Weather, AppLoader } from 'components'
import { decodeWeather } from 'helpers'

const App = () => {
    const { state, udpateWeather } = useWeater()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude: lat, longitude: long } = position.coords
            socket.emit('getWeatherUpdate', { lat, long })
        })
        socket.on('weatherUpdate', async (buffer: Buffer) => {
            const weather = await decodeWeather(buffer)
            udpateWeather(weather)
        })
    }, [])

    return state ? <Weather {...state} /> : <AppLoader />
}

export default App
