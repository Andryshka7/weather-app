import { Weather as WeatherType } from 'types'

const Weather = (state: WeatherType) => (
    <div className='mt-24 rounded-md bg-slate-700 px-16 py-8'>
        <div className='flex items-center gap-2'>
            <img src={state.icon} className='h-16 w-16' alt='' />
            <h1 className='text-2xl font-bold'>
                {state.temp_c} °C in {state.region}, {state.country}
            </h1>
        </div>
        <p className='m-auto w-fit text-lg font-semibold'>
            {state.conditions}, feels like {state.feelslike_c} °C
        </p>
    </div>
)

export default Weather
