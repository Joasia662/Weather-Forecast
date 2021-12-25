import { IForecastListElement } from "./IWeather";

export interface IDayInfo {
    date:string;
    average_temp: number;
    average_feels: number;
    average_humidity: number;
    average_snow: number;
    average_windSpeed: number;
    average_visability: number;
    min_temp: number;
    max_temp: number;
    hourPeriod: IForecastListElement[];

}