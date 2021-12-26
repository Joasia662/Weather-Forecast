import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IChartData } from 'src/app/interfaces/IChartData';
import { IDayInfo } from 'src/app/interfaces/IDayInfo';

@Component({
  selector: 'app-full-day-dialog',
  templateUrl: './full-day-dialog.component.html',
  styleUrls: ['./full-day-dialog.component.scss']
})
export class FullDayDialogComponent {
  chartIsReady = false;

  humidity: IChartData = ({} as any);
  pressure: IChartData = ({} as any);
  windSpeed: IChartData = ({} as any);

  public lineChartType = 'line' as Chart.ChartType;
  public lineChartLegend = true;

  public lineHumidityChartLabels: string[] = [];
  public lineHumidityChartData: {
    data: number[];
    label: string;
  }[] = [];

  public linePressureChartLabels: string[] = [];
  public linePressureChartData: {
    data: number[];
    label: string;
  }[] = [];

  public lineWindSpeedChartLabels: string[] = [];
  public lineWindSpeedChartData: {
    data: number[];
    label: string;
  }[] = [];

  constructor(
    public dialogRef: MatDialogRef<FullDayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public weatherInfo: IDayInfo,
  ) { }

  ngOnInit(): void {
    this. getAverageValues();
    this.createLabels();
  }

  getAverageValues(): void {
    let dataSum = {
      feels: 0,
      humidity: 0,
      snow: 0,
      temp: 0,
      windSpeed: 0,
      visability: 0,
    }
    this.weatherInfo.min_temp = this.weatherInfo.hourPeriod[0].main.temp_min;
    this.weatherInfo.max_temp = this.weatherInfo.hourPeriod[0].main.temp_max;

    this.weatherInfo.hourPeriod.forEach(peroid => {
      dataSum.feels += peroid.main.feels_like;
      dataSum.humidity += peroid.main.humidity;
      if (peroid.main.temp_max >= this.weatherInfo.max_temp) this.weatherInfo.max_temp = peroid.main.temp_max;
      if (peroid.main.temp_min <= this.weatherInfo.min_temp) this.weatherInfo.min_temp = peroid.main.temp_max;

      dataSum.temp += peroid.main.temp;
      if (peroid.snow) dataSum.snow += peroid.snow['3h'];
      dataSum.visability += peroid.visibility;
      dataSum.windSpeed += peroid.wind.gust;
    });

    let elementsNumber = this.weatherInfo.hourPeriod.length;
    this.weatherInfo.average_feels = dataSum.feels / elementsNumber;
    this.weatherInfo.average_humidity = dataSum.humidity / elementsNumber;
    this.weatherInfo.average_temp = dataSum.temp / elementsNumber;
    this.weatherInfo.average_visability = dataSum.visability / elementsNumber / 1000;
    this.weatherInfo.average_windSpeed = dataSum.windSpeed / elementsNumber;
    if (dataSum.snow != 0) this.weatherInfo.average_snow = dataSum.snow / elementsNumber;
}

  createLabels() {
    this.humidity = {
      labels: [],
      values: [],
      title: '',
    }
    this.pressure = {
      labels: [],
      values: [],
      title: '',
    }
    this.windSpeed = {
      labels: [],
      values: [],
      title: '',
    }

    this.weatherInfo.hourPeriod.forEach(period => {
      const hour = new Date(period.dt_txt).getHours().toString();

      this.humidity.labels.push(hour);
      this.pressure.labels.push(hour);
      this.windSpeed.labels.push(hour);

      this.humidity.values.push(period.main.humidity);
      this.pressure.values.push(period.main.pressure);
      this.windSpeed.values.push(period.wind.speed);

      this.humidity.title = 'Humidity';
      this.pressure.title = 'Pressure';
      this.windSpeed.title = 'Wind Speed';
    });

    this.lineHumidityChartLabels = this.humidity.labels;
    this.linePressureChartLabels = this.pressure.labels;
    this.lineWindSpeedChartLabels = this.windSpeed.labels;

    this.lineHumidityChartData = [{ data: this.humidity.values, label: this.humidity.title }];
    this.linePressureChartData = [{ data: this.pressure.values, label: this.pressure.title }];
    this.lineWindSpeedChartData = [{ data: this.windSpeed.values, label: this.windSpeed.title }];

    this.chartIsReady = true;
  }
}
