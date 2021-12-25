import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IForecastListElement } from 'src/app/interfaces/IWeather';

@Component({
  selector: 'app-hour-details-dailog',
  templateUrl: './hour-details-dailog.component.html',
  styleUrls: ['./hour-details-dailog.component.scss']
})
export class HourDetailsDailogComponent {

  constructor(
    public dialogRef: MatDialogRef<HourDetailsDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public hour: IForecastListElement,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
