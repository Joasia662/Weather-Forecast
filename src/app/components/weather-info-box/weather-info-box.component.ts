import { Component, Input, OnInit } from '@angular/core';
import { IForecast, IForecastList } from 'src/app/interfaces/IWeather';

@Component({
  selector: 'app-weather-info-box',
  templateUrl: './weather-info-box.component.html',
  styleUrls: ['./weather-info-box.component.scss']
})
export class WeatherInfoBoxComponent implements OnInit {
  @Input() weatherInfo: IForecastList= {};
  constructor() {
   }

  ngOnInit(): void {
  }

}
