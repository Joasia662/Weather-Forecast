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
    this.setDays();
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
          this.weatherInfo.list.forEach(element => {
            this.separateDays(element);
          });
          this.getAverageValues();

        },
        error: ({ err }) => {
          this.weatherEmpty = true;
        }
      });
  }

  setDays() {
    let today = new Date();
    for (let index = 0; index < this.days.length; index++) {
      today.setDate(today.getDate() + 1);
      this.days[index] = {
        date: today.toDateString(),
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
      
    }
  }

  separateDays(element: IForecastListElement): void {
    const today = new Date();
    const elementDate = new Date(element.dt_txt);

    switch (elementDate.getDate()) {
      case (today.getDate() + 1): {
        this.days[0].hourPeriod.push(element);
        break;
      }
      case (today.getDate() + 2): {
        this.days[1].hourPeriod.push(element);
        break;
      }
      case (today.getDate() + 3): {
        this.days[2].hourPeriod.push(element);
        break;
      }
      case (today.getDate() + 4): {
        this.days[3].hourPeriod.push(element);
        break;
      }
      case (today.getDate() + 5): {
        this.days[4].hourPeriod.push(element);
        break;
      }
    }
  }

  getAverageValues(): void {
    this.days.forEach(day => {
      let dataSum = {
        feels: 0,
        humidity: 0,
        snow: 0,
        temp: 0,
        windSpeed: 0,
        visability: 0,
      }
      day.min_temp = day.hourPeriod[0].main.temp_min;
      day.max_temp = day.hourPeriod[0].main.temp_max;

      day.hourPeriod.forEach(peroid => {
        dataSum.feels += peroid.main.feels_like;
        dataSum.humidity += peroid.main.humidity;
        if(peroid.main.temp_max>=day.max_temp) day.max_temp= peroid.main.temp_max;
        if(peroid.main.temp_min<=day.min_temp) day.min_temp= peroid.main.temp_max;
 
        dataSum.temp += peroid.main.temp;
        if(peroid.snow) dataSum.snow += peroid.snow['3h'];
        dataSum.visability += peroid.visibility;
        dataSum.windSpeed += peroid.wind.gust;
      });

      let elementsNumber = day.hourPeriod.length;
      day.average_feels = dataSum.feels / elementsNumber;
      day.average_humidity = dataSum.humidity / elementsNumber;
      day.average_temp = dataSum.temp / elementsNumber;
      day.average_visability = dataSum.visability / elementsNumber/1000;
      day.average_windSpeed = dataSum.windSpeed / elementsNumber;
      if(dataSum.snow!=0) day.average_snow = dataSum.snow / elementsNumber;

    });
  }

}
