import { Component, OnInit } from '@angular/core';
import { IForecast } from './interfaces/IWeather';
import {ConfigService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  value = 'Select City';
  weatherInfo: IForecast | undefined;

  constructor(
   private api: ConfigService
  ){}
  ngOnInit(){
   
    this.api.getForecastByCity('Cracow')
    .subscribe((res =>{
      this.weatherInfo=  res;
    }));
  }

}
