import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather/weather-items.component';
import { WeatherListComponent} from './weather/weather-list.component';
import { WeatherItem } from './weather/weather-item'
import { WEATHER_ITEMS } from './weather/weather.data'
import {WeatherService} from './weather/weather.service'
import {WeatherSearchComponent} from './weather/weather.search'
import {SidebarComponent} from './weather/sidebar.component'
import {ProfileService} from './weather/profile.service'


@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [WeatherService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
