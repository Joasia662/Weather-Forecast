import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FullDayDialogComponent } from 'src/app/dialogs/full-day-dialog/full-day-dialog.component';
import { HourDetailsDailogComponent } from 'src/app/dialogs/hour-details-dailog/hour-details-dailog.component';
import { IDayInfo } from 'src/app/interfaces/IDayInfo';
import { IForecastListElement } from 'src/app/interfaces/IWeather';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-info-box',
  templateUrl: './weather-info-box.component.html',
  styleUrls: ['./weather-info-box.component.scss']
})
export class WeatherInfoBoxComponent implements OnInit {
  @Input() weatherInfo: IDayInfo = ({} as any);
  enviroment = environment;
  constructor(
    private sanitizer: DomSanitizer,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  getSafeUrl(iconId: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.enviroment.pictures_url + iconId + "@2x.png");
  }

  openHourDialog(hour: IForecastListElement): void {
    const dialogRef = this.dialog.open(HourDetailsDailogComponent, {
      width: '500px',
      data: { hour: hour },
    });
  }
  openFullDayDialog(): void {
    const dialogRef = this.dialog.open(FullDayDialogComponent, {
      width: '700px',
      data:  this.weatherInfo ,
    });
  }
}


