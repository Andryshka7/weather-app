import { Body, Controller, Get } from '@nestjs/common'
import { WeatherService } from '../services/weather.service'

@Controller('weater')
export class WeaterController {
    constructor(private weatherService: WeatherService) {}
    @Get()
    getWeather() {
        return this.weatherService.getCurrentWearher()
    }
}
