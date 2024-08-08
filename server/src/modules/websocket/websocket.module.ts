import { Module } from '@nestjs/common'
import { SocketGateway } from './gateways/websocket.gateway'
import { WeatherService } from 'modules/weather/services/weather.service'

@Module({ providers: [SocketGateway, WeatherService] })
export class GatewayModule {}
