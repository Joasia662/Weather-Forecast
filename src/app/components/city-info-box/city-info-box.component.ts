import { Component, Input, OnInit } from '@angular/core';
import { IForecastCityInfo } from 'src/app/interfaces/IWeather';

@Component({
  selector: 'app-city-info-box',
  templateUrl: './city-info-box.component.html',
  styleUrls: ['./city-info-box.component.scss']
})
export class CityInfoBoxComponent implements OnInit {
  @Input() cityInfo: IForecastCityInfo = {
    id: 0,
    name: '',
    coord: {
      lat: 0,
      lon: 0
    },
    country: '',
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0
  };
  sunrise: Date=new Date();
  sunset: Date=new Date();
  constructor() { }

  ngOnInit(): void {
    this.sunrise= new Date(this.cityInfo.sunrise*1000)
    this.sunset = new Date(this.cityInfo.sunset*1000)
    console.log(this.sunset)
  }

}
