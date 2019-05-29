import { Component } from '@angular/core';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherSearchComponent } from './weather/weather.search';
import {SidebarComponent} from './weather/sidebar.component';

@Component({
  selector: 'app-root',
  template: `
  <header>
  <h1>Weather App For Nikita</h1>
  </header>
  <sidebar></sidebar>
  <weather-search></weather-search>
  <weather-list></weather-list>
  `,
  styleUrls: ['app.css']
  
})
export class AppComponent {
  
}
