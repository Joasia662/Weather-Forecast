import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FullDayDialogComponent } from 'src/app/dialogs/full-day-dialog/full-day-dialog.component';
import { IDayInfo } from 'src/app/interfaces/IDayInfo';
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
  
  openFullDayDialog(): void {
    const dialogRef = this.dialog.open(FullDayDialogComponent, {
      width: '500px',
      data: this.weatherInfo,
    });
  }
}


