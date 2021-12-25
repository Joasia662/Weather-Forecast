import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { IDayInfo } from 'src/app/interfaces/IDayInfo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-info-box',
  templateUrl: './weather-info-box.component.html',
  styleUrls: ['./weather-info-box.component.scss']
})
export class WeatherInfoBoxComponent implements OnInit {
  @Input() weatherInfo: IDayInfo= ({} as any);
  enviroment= environment;
  constructor(private sanitizer: DomSanitizer) {
   }

  ngOnInit(): void {
  }
  getSafeUrl(iconId: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.enviroment.pictures_url+ iconId+ "@2x.png");
  }


}
