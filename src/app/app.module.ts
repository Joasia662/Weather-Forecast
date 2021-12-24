import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { WeatherInfoBoxComponent } from './components/weather-info-box/weather-info-box.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CityInfoBoxComponent } from './components/city-info-box/city-info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoBoxComponent,
    ErrorMessageComponent,
    CityInfoBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
