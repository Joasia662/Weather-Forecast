import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDayInfo } from 'src/app/interfaces/IDayInfo';


@Component({
  selector: 'app-full-day-dialog',
  templateUrl: './full-day-dialog.component.html',
  styleUrls: ['./full-day-dialog.component.scss']
})
export class FullDayDialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<FullDayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public weatherInfo: IDayInfo,
  ) { }

  ngOnInit(): void {
    debugger
  }

}
