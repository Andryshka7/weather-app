import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets'
import { Server, Socket } from 'ws'
import WebSocket from 'ws'
import { createCable } from '@anycable/core'

const ANYCABLE_URL = process.env.ANYCABLE_URL

@WebSocketGateway()
export class AnyCableGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server

    private cable

    constructor() {
        this.cable = createCable(ANYCABLE_URL, { websocketImplementation: WebSocket })

        this.cable.on('connect', () => {
            console.log('Connected to AnyCable server')
        })

        this.cable.on('disconnect', () => {
            console.log('Disconnected from AnyCable server')
        })

        this.cable.on('error', (error) => {
            console.error('AnyCable error:', error)
        })
    }

    handleConnection(client: Socket) {
        console.log('Client connected:', client.id)
    }

    handleDisconnect(client: Socket) {
        console.log('Client disconnected:', client.id)
    }
}
