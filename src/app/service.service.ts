import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForecast } from './interfaces/IWeather';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class ConfigService {
    enviroment = environment;
  constructor(private http: HttpClient) { }

  getForecastByCity(city: string) {
    

    const buildURLQuery = obj =>
      Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

    buildURLQuery({q: city, gender: this.enviroment.api_key});
    return this.http.get<IForecast>(`${this.enviroment.http_url}/forecast?`);
  }

  
}
