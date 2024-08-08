import { create } from 'zustand'
import { Weather } from 'types'

type WeatherStore = {
    state: Weather | null
    udpateWeather: (weather: Weather) => void
}

const useWeater = create<WeatherStore>()((set) => ({
    state: null,
    udpateWeather: (weather) => set({ state: weather })
}))

export default useWeater
