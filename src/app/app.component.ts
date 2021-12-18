import { Component, OnInit } from '@angular/core';
import { IForecast } from './interfaces/IWeather';
import {ConfigService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  value = 'Clear me';
  constructor(
   private api: ConfigService
  ){}
  ngOnInit(){
    debugger
    let tmp: IForecast;
    this.api.getForecastByCity('Cracow')
    .subscribe((res =>{

      debugger
      tmp=  res;
    }));
  }

}
