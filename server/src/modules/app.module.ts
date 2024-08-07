import { Module } from '@nestjs/common'
import { WeatherModule } from './weather/weather.module'
import { AnyCableGateway } from 'anycable/anycable.gateway'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [ConfigModule.forRoot(), WeatherModule],
    providers: [AnyCableGateway]
})
export class AppModule {}
