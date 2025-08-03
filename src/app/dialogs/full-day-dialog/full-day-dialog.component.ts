import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IChartData } from 'src/app/interfaces/IChartData';
import { IDayInfo } from 'src/app/interfaces/IDayInfo';
import { ChartType } from 'chart.js';

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

  public lineChartType: ChartType = "line";
  public lineChartLegend = true;

  public lineHumidityChartLabels: string[] = [];
  public lineHumidityChartData: {
    data: number[];
    label: string;
    backgroundColor?: string;
    borderColor?: string;
    pointBorderColor?: string;
    pointBackgroundColor?: string;
  }[] = [];

  public linePressureChartLabels: string[] = [];
  public linePressureChartData: {
    data: number[];
    label: string;
    backgroundColor?: string;
    borderColor?: string;
    pointBorderColor?: string;
    pointBackgroundColor?: string;
  }[] = [];

  public lineWindSpeedChartLabels: string[] = [];
  public lineWindSpeedChartData: {
    data: number[];
    label: string;
    backgroundColor?: string;
    borderColor?: string;
    pointBorderColor?: string;
    pointBackgroundColor?: string;
  }[] = [];

  constructor(
    public dialogRef: MatDialogRef<FullDayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public weatherInfo: IDayInfo,
  ) { }

  ngOnInit(): void {
    this.getAverageValues();
    console.log(this.weatherInfo)

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

    this.lineHumidityChartData = [{
      data: this.humidity.values, label: this.humidity.title,
      backgroundColor: 'rgba(80,170,80,0.4)', borderColor: 'rgba(80,125,0,0.4)', pointBorderColor: 'rgba(0,125,0,0.4)', pointBackgroundColor: 'rgba(0,125,0,0.4)'
    }];
    this.lineWindSpeedChartData = [{
      data: this.windSpeed.values, label: this.windSpeed.title,
      backgroundColor: 'rgba(16,159,255,0.4)', borderColor: 'rgba(76,144,253,0.8)', pointBorderColor: 'rgba(0,60,255,0.4)', pointBackgroundColor: 'rgba(0,60,255,0.4)'
    }];
    this.linePressureChartData = [{ data: this.pressure.values, label: this.pressure.title }];

    this.chartIsReady = true;
  }

}
