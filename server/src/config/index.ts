import { ConfigModule } from '@nestjs/config'

ConfigModule.forRoot()

const WEATER_API_URL = process.env.WEATHER_API_URL
const WEATER_API_KEY = process.env.WEATHER_API_KEY

export { WEATER_API_URL, WEATER_API_KEY }
