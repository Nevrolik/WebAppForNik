import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {WeatherService} from './weather.service'
import {WeatherItem} from './weather-item'
import { Observable } from 'rxjs/Observable';
@Component({
selector: 'weather-search',
template: `
<section class="weather-search">
<form (ngSubmit)="onSubmit(f)"#f="ngForm">
<label for="city">City</label>
<input [(ngModel)]="city" type="text" id="city" required name="city">
<button type="submit">Add City</button>
</form>
</section>
`,
styleUrls:['weather-items.css']
})
export class WeatherSearchComponent{
constructor (private _weatherService: WeatherService){

}
onSubmit(form: FormGroup) {
  this._weatherService.searchWeatherData(form.value.city)
  .subscribe(
    data => {
    const weatherItem = new WeatherItem(data.name,data.weather[0].description,data.main.temp);
    this._weatherService.addWeatherItem(weatherItem);
    });
}
}
