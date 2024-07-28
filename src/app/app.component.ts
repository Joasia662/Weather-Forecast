import { Component, OnInit } from '@angular/core';
import { IDayInfo } from './interfaces/IDayInfo';
import { IForecast, IForecastListElement } from './interfaces/IWeather';
import { ConfigService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  searchValue = 'Kraków';
  weatherEmpty = true;
  weatherInfo: IForecast = ({} as any);
  days = new Array<IDayInfo>(5);


  constructor(
    private api: ConfigService
  ) { }

  ngOnInit() {
    this.getForecast('Kraków');
  }

  onSearchChange(city: string) {
    this.getForecast(city);
  }
  onSearchClick() {
    this.getForecast(this.searchValue);
  }

  getForecast(city: string) {
    this.api.getForecastByCity(city)
      .subscribe({
        next: res => {
          this.weatherInfo = res;
          this.weatherEmpty = false;
          this.setDays(new Date(this.weatherInfo.list[0].dt_txt));
          // We implement the initialization here, because the query made in the evening may return 5 consecutive days EXCLUDING the current one, but in rest cases it INCLUDES today
          this.weatherInfo.list.forEach(element => {
            this.separateDays(new Date(this.weatherInfo.list[0].dt_txt), element);
          });
        },
        error: ({ err }) => {
          this.weatherEmpty = true;
        }
      });
  }

  setDays(startingDay: Date) {
    for (let index = 0; index < this.days.length; index++) {
      this.days[index] = {
        date: startingDay.toDateString(),
        average_temp: 0,
        min_temp: 0,
        max_temp: 0,
        average_feels: 0,
        average_humidity: 0,
        average_snow: 0,
        average_windSpeed: 0,
        average_visability: 0,
        hourPeriod: [],
      }
      startingDay.setDate(startingDay.getDate() + 1);
    }
  }

  separateDays(startingDate: Date, element: IForecastListElement): void {
    const elementDate = new Date(element.dt_txt);

    switch (elementDate.getDate()) {
      case (startingDate.getDate()): {
        this.days[0].hourPeriod.push(element);
        break;
      }
      case (new Date(this.days[1].date).getDate()): {
        this.days[1].hourPeriod.push(element);
        break;
      }
      case (new Date(this.days[2].date).getDate()): {
        this.days[2].hourPeriod.push(element);
        break;
      }
      case (new Date(this.days[3].date).getDate()): {
        this.days[3].hourPeriod.push(element);
        break;
      }
      case (new Date(this.days[4].date).getDate()): {
        this.days[4].hourPeriod.push(element);
        break;
      }
    }
  }
}
