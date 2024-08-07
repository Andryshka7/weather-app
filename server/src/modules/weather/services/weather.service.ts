import { Injectable } from '@nestjs/common'

@Injectable()
export class WeatherService {
    getCurrentWearher() {
        return 'It`s sunny right now!'
    }
}
