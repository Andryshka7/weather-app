import { Module } from '@nestjs/common'
import { WeatherService } from './services/weather.service'
import { WeaterController } from './controllers/weater.controller'

@Module({
    controllers: [WeaterController],
    providers: [WeatherService]
})
export class WeatherModule {}
