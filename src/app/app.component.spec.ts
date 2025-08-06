import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AppComponent } from "./app.component"
import { Component, NO_ERRORS_SCHEMA } from "@angular/core"
import { ConfigService } from "./services/http.service"
import { of } from "rxjs"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { IForecast } from "./interfaces/IWeather"
import { FormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule } from "@angular/material/dialog"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatListModule } from "@angular/material/list"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatSliderModule } from "@angular/material/slider"
import { NgChartsModule } from "ng2-charts"
import { CelsiusPipe } from "./pipes/celsius.pipe"

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let mockCityInfo: IForecast;
    let mockConfigService;


    beforeEach(() => {
        mockCityInfo = {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1754524800,
                    "main": {
                        "temp": 14.38,
                        "feels_like": 13.26,
                        "temp_min": 12.61,
                        "temp_max": 14.38,
                        "pressure": 1025,
                        "sea_level": 1025,
                        "grnd_level": 993,
                        "humidity": 53,
                        "temp_kf": 1.77
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 0.98,
                        "deg": 239,
                        "gust": 0.92
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-07 00:00:00"
                },
                {
                    "dt": 1754535600,
                    "main": {
                        "temp": 13.59,
                        "feels_like": 12.62,
                        "temp_min": 12.01,
                        "temp_max": 13.59,
                        "pressure": 1025,
                        "sea_level": 1025,
                        "grnd_level": 993,
                        "humidity": 62,
                        "temp_kf": 1.58
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 0.77,
                        "deg": 177,
                        "gust": 0.81
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-07 03:00:00"
                },
                {
                    "dt": 1754546400,
                    "main": {
                        "temp": 15.71,
                        "feels_like": 14.98,
                        "temp_min": 15.71,
                        "temp_max": 16.38,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 993,
                        "humidity": 63,
                        "temp_kf": -0.67
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
                        "all": 2
                    },
                    "wind": {
                        "speed": 1.42,
                        "deg": 154,
                        "gust": 1.94
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-07 06:00:00"
                },
                {
                    "dt": 1754557200,
                    "main": {
                        "temp": 21.89,
                        "feels_like": 21.49,
                        "temp_min": 21.89,
                        "temp_max": 21.89,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 993,
                        "humidity": 52,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 84
                    },
                    "wind": {
                        "speed": 2.07,
                        "deg": 115,
                        "gust": 1.96
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-07 09:00:00"
                },
                {
                    "dt": 1754568000,
                    "main": {
                        "temp": 21.93,
                        "feels_like": 21.38,
                        "temp_min": 21.93,
                        "temp_max": 21.93,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 991,
                        "humidity": 46,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 80
                    },
                    "wind": {
                        "speed": 2.03,
                        "deg": 106,
                        "gust": 2.16
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-07 12:00:00"
                },
                {
                    "dt": 1754578800,
                    "main": {
                        "temp": 22.6,
                        "feels_like": 22.12,
                        "temp_min": 22.6,
                        "temp_max": 22.6,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 991,
                        "humidity": 46,
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
                        "all": 18
                    },
                    "wind": {
                        "speed": 1.61,
                        "deg": 89,
                        "gust": 1.6
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-07 15:00:00"
                },
                {
                    "dt": 1754589600,
                    "main": {
                        "temp": 18,
                        "feels_like": 17.45,
                        "temp_min": 18,
                        "temp_max": 18,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 990,
                        "humidity": 61,
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
                        "all": 38
                    },
                    "wind": {
                        "speed": 2.02,
                        "deg": 90,
                        "gust": 2.07
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-07 18:00:00"
                },
                {
                    "dt": 1754600400,
                    "main": {
                        "temp": 14.82,
                        "feels_like": 14.05,
                        "temp_min": 14.82,
                        "temp_max": 14.82,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 990,
                        "humidity": 65,
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
                        "all": 37
                    },
                    "wind": {
                        "speed": 1.62,
                        "deg": 125,
                        "gust": 1.64
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-07 21:00:00"
                },
                {
                    "dt": 1754611200,
                    "main": {
                        "temp": 13.34,
                        "feels_like": 12.66,
                        "temp_min": 13.34,
                        "temp_max": 13.34,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 990,
                        "humidity": 74,
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
                        "all": 33
                    },
                    "wind": {
                        "speed": 0.57,
                        "deg": 126,
                        "gust": 0.58
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-08 00:00:00"
                },
                {
                    "dt": 1754622000,
                    "main": {
                        "temp": 13.64,
                        "feels_like": 12.86,
                        "temp_min": 13.64,
                        "temp_max": 13.64,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 69,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 73
                    },
                    "wind": {
                        "speed": 0.86,
                        "deg": 187,
                        "gust": 0.76
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-08 03:00:00"
                },
                {
                    "dt": 1754632800,
                    "main": {
                        "temp": 18.4,
                        "feels_like": 17.86,
                        "temp_min": 18.4,
                        "temp_max": 18.4,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 60,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 75
                    },
                    "wind": {
                        "speed": 1.18,
                        "deg": 244,
                        "gust": 1.58
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-08 06:00:00"
                },
                {
                    "dt": 1754643600,
                    "main": {
                        "temp": 23.07,
                        "feels_like": 22.82,
                        "temp_min": 23.07,
                        "temp_max": 23.07,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 53,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 77
                    },
                    "wind": {
                        "speed": 3.69,
                        "deg": 259,
                        "gust": 5.76
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-08 09:00:00"
                },
                {
                    "dt": 1754654400,
                    "main": {
                        "temp": 25.13,
                        "feels_like": 24.98,
                        "temp_min": 25.13,
                        "temp_max": 25.13,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 49,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 76
                    },
                    "wind": {
                        "speed": 6.26,
                        "deg": 271,
                        "gust": 7.61
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-08 12:00:00"
                },
                {
                    "dt": 1754665200,
                    "main": {
                        "temp": 25.23,
                        "feels_like": 25.19,
                        "temp_min": 25.23,
                        "temp_max": 25.23,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 53,
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
                        "all": 46
                    },
                    "wind": {
                        "speed": 3.25,
                        "deg": 278,
                        "gust": 5.44
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-08 15:00:00"
                },
                {
                    "dt": 1754676000,
                    "main": {
                        "temp": 20.3,
                        "feels_like": 20.14,
                        "temp_min": 20.3,
                        "temp_max": 20.3,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 67,
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
                        "all": 44
                    },
                    "wind": {
                        "speed": 1.23,
                        "deg": 352,
                        "gust": 1.15
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-08 18:00:00"
                },
                {
                    "dt": 1754686800,
                    "main": {
                        "temp": 17.41,
                        "feels_like": 17.14,
                        "temp_min": 17.41,
                        "temp_max": 17.41,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 991,
                        "humidity": 74,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 8
                    },
                    "wind": {
                        "speed": 0.63,
                        "deg": 127,
                        "gust": 0.74
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-08 21:00:00"
                },
                {
                    "dt": 1754697600,
                    "main": {
                        "temp": 16.2,
                        "feels_like": 15.91,
                        "temp_min": 16.2,
                        "temp_max": 16.2,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 990,
                        "humidity": 78,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 8
                    },
                    "wind": {
                        "speed": 0.82,
                        "deg": 141,
                        "gust": 0.84
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-09 00:00:00"
                },
                {
                    "dt": 1754708400,
                    "main": {
                        "temp": 15.38,
                        "feels_like": 15.06,
                        "temp_min": 15.38,
                        "temp_max": 15.38,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 990,
                        "humidity": 80,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 2
                    },
                    "wind": {
                        "speed": 1.17,
                        "deg": 144,
                        "gust": 1.15
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-09 03:00:00"
                },
                {
                    "dt": 1754719200,
                    "main": {
                        "temp": 19.82,
                        "feels_like": 19.63,
                        "temp_min": 19.82,
                        "temp_max": 19.82,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 991,
                        "humidity": 68,
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
                        "all": 22
                    },
                    "wind": {
                        "speed": 1.66,
                        "deg": 112,
                        "gust": 2.34
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-09 06:00:00"
                },
                {
                    "dt": 1754730000,
                    "main": {
                        "temp": 25.22,
                        "feels_like": 25.21,
                        "temp_min": 25.22,
                        "temp_max": 25.22,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 991,
                        "humidity": 54,
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
                        "all": 32
                    },
                    "wind": {
                        "speed": 2.98,
                        "deg": 109,
                        "gust": 3.35
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-09 09:00:00"
                },
                {
                    "dt": 1754740800,
                    "main": {
                        "temp": 28.07,
                        "feels_like": 28.1,
                        "temp_min": 28.07,
                        "temp_max": 28.07,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 990,
                        "humidity": 45,
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
                        "all": 34
                    },
                    "wind": {
                        "speed": 2.38,
                        "deg": 105,
                        "gust": 2.01
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-09 12:00:00"
                },
                {
                    "dt": 1754751600,
                    "main": {
                        "temp": 28.8,
                        "feels_like": 28.87,
                        "temp_min": 28.8,
                        "temp_max": 28.8,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 45,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.84,
                        "deg": 36,
                        "gust": 1.23
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-09 15:00:00"
                },
                {
                    "dt": 1754762400,
                    "main": {
                        "temp": 23,
                        "feels_like": 22.97,
                        "temp_min": 23,
                        "temp_max": 23,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 62,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 2.32,
                        "deg": 107,
                        "gust": 2.53
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-09 18:00:00"
                },
                {
                    "dt": 1754773200,
                    "main": {
                        "temp": 20.85,
                        "feels_like": 20.69,
                        "temp_min": 20.85,
                        "temp_max": 20.85,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 990,
                        "humidity": 65,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 80
                    },
                    "wind": {
                        "speed": 1.16,
                        "deg": 137,
                        "gust": 1.21
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-09 21:00:00"
                },
                {
                    "dt": 1754784000,
                    "main": {
                        "temp": 19.45,
                        "feels_like": 19.23,
                        "temp_min": 19.45,
                        "temp_max": 19.45,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 77
                    },
                    "wind": {
                        "speed": 0.81,
                        "deg": 181,
                        "gust": 0.85
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-10 00:00:00"
                },
                {
                    "dt": 1754794800,
                    "main": {
                        "temp": 18.29,
                        "feels_like": 18.05,
                        "temp_min": 18.29,
                        "temp_max": 18.29,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 72,
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
                        "all": 27
                    },
                    "wind": {
                        "speed": 0.67,
                        "deg": 163,
                        "gust": 0.64
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-10 03:00:00"
                },
                {
                    "dt": 1754805600,
                    "main": {
                        "temp": 22.61,
                        "feels_like": 22.65,
                        "temp_min": 22.61,
                        "temp_max": 22.61,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 66,
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
                        "all": 20
                    },
                    "wind": {
                        "speed": 0.76,
                        "deg": 191,
                        "gust": 1.02
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-10 06:00:00"
                },
                {
                    "dt": 1754816400,
                    "main": {
                        "temp": 27.96,
                        "feels_like": 28.77,
                        "temp_min": 27.96,
                        "temp_max": 27.96,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 988,
                        "humidity": 54,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 56
                    },
                    "wind": {
                        "speed": 1.46,
                        "deg": 177,
                        "gust": 1.74
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-10 09:00:00"
                },
                {
                    "dt": 1754827200,
                    "main": {
                        "temp": 31.17,
                        "feels_like": 30.99,
                        "temp_min": 31.17,
                        "temp_max": 31.17,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 987,
                        "humidity": 39,
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
                        "all": 28
                    },
                    "wind": {
                        "speed": 2.17,
                        "deg": 256,
                        "gust": 3.13
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-10 12:00:00"
                },
                {
                    "dt": 1754838000,
                    "main": {
                        "temp": 31.29,
                        "feels_like": 32.5,
                        "temp_min": 31.29,
                        "temp_max": 31.29,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 986,
                        "humidity": 47,
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
                        "all": 2
                    },
                    "wind": {
                        "speed": 3.16,
                        "deg": 241,
                        "gust": 6.3
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-10 15:00:00"
                },
                {
                    "dt": 1754848800,
                    "main": {
                        "temp": 25.28,
                        "feels_like": 25.53,
                        "temp_min": 25.28,
                        "temp_max": 25.28,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 986,
                        "humidity": 64,
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
                        "all": 14
                    },
                    "wind": {
                        "speed": 2.5,
                        "deg": 307,
                        "gust": 4.6
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-10 18:00:00"
                },
                {
                    "dt": 1754859600,
                    "main": {
                        "temp": 20.59,
                        "feels_like": 20.82,
                        "temp_min": 20.59,
                        "temp_max": 20.59,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 988,
                        "humidity": 81,
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
                        "all": 0
                    },
                    "wind": {
                        "speed": 1.95,
                        "deg": 290,
                        "gust": 3.76
                    },
                    "visibility": 10000,
                    "pop": 1,
                    "rain": {
                        "3h": 0.6
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-10 21:00:00"
                },
                {
                    "dt": 1754870400,
                    "main": {
                        "temp": 18.56,
                        "feels_like": 18.72,
                        "temp_min": 18.56,
                        "temp_max": 18.56,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 990,
                        "humidity": 86,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 1
                    },
                    "wind": {
                        "speed": 1.72,
                        "deg": 294,
                        "gust": 4.21
                    },
                    "visibility": 10000,
                    "pop": 0.28,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-11 00:00:00"
                },
                {
                    "dt": 1754881200,
                    "main": {
                        "temp": 18.3,
                        "feels_like": 18.3,
                        "temp_min": 18.3,
                        "temp_max": 18.3,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 990,
                        "humidity": 81,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 87
                    },
                    "wind": {
                        "speed": 1.48,
                        "deg": 321,
                        "gust": 2.78
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-11 03:00:00"
                },
                {
                    "dt": 1754892000,
                    "main": {
                        "temp": 19.34,
                        "feels_like": 19.05,
                        "temp_min": 19.34,
                        "temp_max": 19.34,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 991,
                        "humidity": 66,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 89
                    },
                    "wind": {
                        "speed": 2.68,
                        "deg": 346,
                        "gust": 3.75
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-11 06:00:00"
                },
                {
                    "dt": 1754902800,
                    "main": {
                        "temp": 22.16,
                        "feels_like": 21.74,
                        "temp_min": 22.16,
                        "temp_max": 22.16,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 991,
                        "humidity": 50,
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
                        "all": 38
                    },
                    "wind": {
                        "speed": 2.65,
                        "deg": 330,
                        "gust": 3.22
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-11 09:00:00"
                },
                {
                    "dt": 1754913600,
                    "main": {
                        "temp": 24.31,
                        "feels_like": 23.92,
                        "temp_min": 24.31,
                        "temp_max": 24.31,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 990,
                        "humidity": 43,
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
                        "all": 20
                    },
                    "wind": {
                        "speed": 2.54,
                        "deg": 333,
                        "gust": 3.42
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-11 12:00:00"
                },
                {
                    "dt": 1754924400,
                    "main": {
                        "temp": 24.48,
                        "feels_like": 24.13,
                        "temp_min": 24.48,
                        "temp_max": 24.48,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 44,
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
                        "all": 3
                    },
                    "wind": {
                        "speed": 3.01,
                        "deg": 354,
                        "gust": 3.96
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-11 15:00:00"
                },
                {
                    "dt": 1754935200,
                    "main": {
                        "temp": 18.98,
                        "feels_like": 18.58,
                        "temp_min": 18.98,
                        "temp_max": 18.98,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 989,
                        "humidity": 63,
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
                        "all": 1
                    },
                    "wind": {
                        "speed": 2.26,
                        "deg": 25,
                        "gust": 2.91
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2025-08-11 18:00:00"
                },
                {
                    "dt": 1754946000,
                    "main": {
                        "temp": 15.96,
                        "feels_like": 15.31,
                        "temp_min": 15.96,
                        "temp_max": 15.96,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 991,
                        "humidity": 65,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 1,
                        "deg": 30,
                        "gust": 1.34
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2025-08-11 21:00:00"
                }
            ],
            "city": {
                "id": 3094802,
                "name": "Krakow",
                "coord": {
                    "lat": 50.0833,
                    "lon": 19.9167
                },
                "country": "PL",
                "population": 755050,
                "timezone": 7200,
                "sunrise": 1754536681,
                "sunset": 1754590454
            }
        };
        mockConfigService = jasmine.createSpyObj(['getForecastByCity'])
        mockConfigService.getForecastByCity.and.returnValue(of(mockCityInfo));
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                BrowserAnimationsModule,
            ],

            providers: [
                { provide: ConfigService, useValue: mockConfigService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(AppComponent)
    })

    it('should have get a city name from our mocked service', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.weatherInfo.city.name).toBe('Krakow')
    })

    it('should have pre-defined title', () => {

        fixture.detectChanges();
        expect(fixture.componentInstance.title).toBe('weather-forecast')
    })
})