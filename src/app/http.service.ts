import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForecast } from './interfaces/IWeather';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class ConfigService {
    enviroment = environment;
  constructor(private http: HttpClient) { }

  getForecastByCity(city: string) {
  
    /*const buildURLQuery = obj =>
      Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

    buildURLQuery({q: city, appid: this.enviroment.api_key});
    */
    let _url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + this.enviroment.api_key;
    return this.http.get<IForecast>(_url);
    // localhost url problem
    //return this.http.get<IForecast>(`${this.enviroment.http_url}/forecast?q:=${city}&appid${this.enviroment.api_key}`);
  }

  
}
