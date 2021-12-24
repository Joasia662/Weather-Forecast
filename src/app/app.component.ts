import { Component, OnInit } from '@angular/core';
import { IForecast } from './interfaces/IWeather';
import { ConfigService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  searchValue = 'Warsaw';
  weatherEmpty = true;

  weatherInfo: IForecast = ({} as any);
  isMetropollia: boolean = false;

  constructor(
    private api: ConfigService
  ) { }
  ngOnInit() {
    this.getForecast('Warsaw');
  }

  onSearchChange(city: string) {
    if (city.length > 3 || city.length === 0) {
      this.getForecast(city);
    }
  }

  getForecast(city: string) {
    this.api.getForecastByCity(city)
      .subscribe({
        next: res => {
          this.weatherInfo = res;
          this.weatherEmpty = false;
          this.weatherInfo.city?.population > 10000 ? this.isMetropollia = true : this.isMetropollia = false;
        },
        error: ({ err }) => {
          this.weatherEmpty = true;
        }
      });
  }

}
