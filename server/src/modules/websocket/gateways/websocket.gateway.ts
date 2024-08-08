import {
    WebSocketGateway,
    OnGatewayInit,
    SubscribeMessage,
    OnGatewayConnection,
    WebSocketServer,
    MessageBody
} from '@nestjs/websockets'
import { WeatherService } from 'modules/weather/services/weather.service'
import { Server } from 'socket.io'

@WebSocketGateway({ cors: { origin: '*' } })
export class SocketGateway implements OnGatewayInit, OnGatewayConnection {
    @WebSocketServer()
    server: Server

    constructor(private readonly weatherService: WeatherService) {}

    afterInit(server: any) {
        console.log('Websocket server initialized')
    }

    handleConnection(client: any, ...args: any[]) {
        console.log('Client connected')
    }

    @SubscribeMessage('getWeatherUpdate')
    async handleGetWeater(@MessageBody() cords) {
        const { lat, long } = cords
        const weather = await this.weatherService.getCurrentWearher(lat, long)
        this.server.emit('weatherUpdate', weather)
    }
}
