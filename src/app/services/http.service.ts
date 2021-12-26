import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IForecast } from '../interfaces/IWeather';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class ConfigService {
  enviroment = environment;
  constructor(private http: HttpClient) { }

  getForecastByCity(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('appid', this.enviroment.api_key)
    .set('units', 'metric');

    return this.http.get<IForecast>(`${this.enviroment.http_url}/forecast?q:=${city}&appid${this.enviroment.api_key}`, {params});
  }


}
