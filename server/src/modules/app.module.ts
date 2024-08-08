import { Module } from '@nestjs/common'
import { WeatherModule } from './weather/weather.module'
import { GatewayModule } from './websocket/websocket.module'

@Module({
    imports: [WeatherModule, GatewayModule]
})
export class AppModule {}
