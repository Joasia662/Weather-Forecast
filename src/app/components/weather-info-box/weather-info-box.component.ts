import { Component, Input, OnInit } from '@angular/core';
import { IDayInfo } from 'src/app/interfaces/IDayInfo';
import { IForecast, IForecastListElement } from 'src/app/interfaces/IWeather';

@Component({
  selector: 'app-weather-info-box',
  templateUrl: './weather-info-box.component.html',
  styleUrls: ['./weather-info-box.component.scss']
})
export class WeatherInfoBoxComponent implements OnInit {
  @Input() weatherInfo: IDayInfo= ({} as any);
  constructor() {
   }

  ngOnInit(): void {
  }

}
