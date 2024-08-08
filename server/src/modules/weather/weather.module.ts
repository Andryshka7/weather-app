import { Module } from '@nestjs/common'
import { WeatherService } from './services/weather.service'

@Module({
    controllers: [],
    providers: [WeatherService]
})
export class WeatherModule {}
