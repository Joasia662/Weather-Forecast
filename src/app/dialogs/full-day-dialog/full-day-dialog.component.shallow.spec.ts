import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FullDayDialogComponent } from "./full-day-dialog.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { CelsiusPipe } from "src/app/pipes/celsius.pipe";
import { By } from "@angular/platform-browser";


describe('FullDayDialogComponent (shallow tests)', () => {
    let fixture: ComponentFixture<FullDayDialogComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FullDayDialogComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [MatDialogModule, CelsiusPipe],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ]
        });
        fixture = TestBed.createComponent(FullDayDialogComponent)

        fixture.componentInstance.weatherInfo = {
            "date": "Tue Aug 05 2025",
            "average_temp": 0,
            "min_temp": 0,
            "max_temp": 0,
            "average_feels": 0,
            "average_humidity": 0,
            "average_snow": 0,
            "average_windSpeed": 0,
            "average_visability": 0,
            "hourPeriod": [
                {
                    "dt": 1754352000,
                    "main": {
                        "temp": 12.41,
                        "feels_like": 12,
                        "temp_min": 12.41,
                        "temp_max": 12.41,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 989,
                        "humidity": 88,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 47
                    },
                    "wind": {
                        "speed": 2.35,
                        "deg": 257,
                        "gust": 4.18
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-05 00:00:00"
                },
                {
                    "dt": 1754362800,
                    "main": {
                        "temp": 11.69,
                        "feels_like": 11.21,
                        "temp_min": 11.69,
                        "temp_max": 11.69,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 88,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "few clouds",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 17
                    },
                    "wind": {
                        "speed": 1.8,
                        "deg": 240,
                        "gust": 2.7
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-05 03:00:00"
                },
                {
                    "dt": 1754373600,
                    "main": {
                        "temp": 16.29,
                        "feels_like": 15.88,
                        "temp_min": 16.29,
                        "temp_max": 16.29,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 988,
                        "humidity": 73,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "few clouds",
                            "icon": "02d"
                        }
                    ],
                    "clouds": {
                        "all": 17
                    },
                    "wind": {
                        "speed": 2.16,
                        "deg": 232,
                        "gust": 3.05
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-05 06:00:00"
                },
                {
                    "dt": 1754384400,
                    "main": {
                        "temp": 21.55,
                        "feels_like": 21.2,
                        "temp_min": 21.55,
                        "temp_max": 21.55,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 988,
                        "humidity": 55,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 6
                    },
                    "wind": {
                        "speed": 2.74,
                        "deg": 242,
                        "gust": 3.61
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-05 09:00:00"
                },
                {
                    "dt": 1754395200,
                    "main": {
                        "temp": 24.47,
                        "feels_like": 24.1,
                        "temp_min": 24.47,
                        "temp_max": 24.47,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 987,
                        "humidity": 43,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 8
                    },
                    "wind": {
                        "speed": 3.52,
                        "deg": 257,
                        "gust": 4.61
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-05 12:00:00"
                },
                {
                    "dt": 1754406000,
                    "main": {
                        "temp": 24.88,
                        "feels_like": 24.65,
                        "temp_min": 24.88,
                        "temp_max": 24.88,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 986,
                        "humidity": 47,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "few clouds",
                            "icon": "02d"
                        }
                    ],
                    "clouds": {
                        "all": 21
                    },
                    "wind": {
                        "speed": 3.68,
                        "deg": 275,
                        "gust": 5.38
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-05 15:00:00"
                },
                {
                    "dt": 1754416800,
                    "main": {
                        "temp": 19.95,
                        "feels_like": 19.72,
                        "temp_min": 19.95,
                        "temp_max": 19.95,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 985,
                        "humidity": 66,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 45
                    },
                    "wind": {
                        "speed": 2.29,
                        "deg": 234,
                        "gust": 2.23
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-05 18:00:00"
                },
                {
                    "dt": 1754427600,
                    "main": {
                        "temp": 17.48,
                        "feels_like": 17.66,
                        "temp_min": 17.48,
                        "temp_max": 17.48,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 987,
                        "humidity": 91,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.38,
                        "deg": 317,
                        "gust": 5.04
                    },
                    "visibility": 10000,
                    "pop": 0.84,
                    "rain": {
                        "3h": 0.52
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-05 21:00:00"
                }
            ]
        }
    });

    it('should have a correct average feels (around 18.3) of the temperatura in weatherInfo', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.weatherInfo.average_feels).toBeCloseTo(18.3);

    })

    it('should have a correct average humidity (around 68.875) in weatherInfo', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.weatherInfo.average_humidity).toBeCloseTo(68.875);

    })

    it('should have a correct average temperature  (around 18.59) in weatherInfo', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.weatherInfo.average_temp).toBeCloseTo(18.59);

    })

    it('should have a correct Max Temperature of 24.88 in weatherInfo', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.weatherInfo.max_temp).toEqual(24.88);

    })

    it('should have a correct Min Temperature 11.69 in weatherInfo', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.weatherInfo.min_temp).toEqual(11.69);

    })

    it('should have a correct Average Visability (around 10) in weatherInfo', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.weatherInfo.average_visability).toBeCloseTo(10);

    })

    it('should have a correct Average WindSpeed (around 3.85)) in weatherInfo', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.weatherInfo.average_windSpeed).toBeCloseTo(3.85);

    })

    it('should render Average Temperature and it should be the first item', () => {

        fixture.detectChanges();

        let de = fixture.debugElement.queryAll(By.css('.info-row'))[0]
        
        expect(de.nativeElement.textContent).toContain('Average Temperature18.59 °C')

    })

    it('should render Max Temperature and it should be the second  item', () => {

        fixture.detectChanges();

        let de = fixture.debugElement.queryAll(By.css('.info-row'))[1]

        expect(de.nativeElement.textContent).toContain('Max Temperature24.88 °C')

    })



})