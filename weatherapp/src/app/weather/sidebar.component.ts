import {Profile} from './profile';
import {ProfileService} from './profile.service'
import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service'
import {WeatherItem} from './weather-item'
@Component({
selector: 'sidebar',
template: `
<h3>Saved Profiles</h3>
<button (click)="onSaveNew()">Save List to Profile</button>
<article class="profile" *ngFor="let profile of profiles" (click)="onLoadProfile(profile)">
<h4>{{ profile.profileName }}</h4>
<p>Cities:{{profile.cities.join(' ')}}</p>
<span class="delete" (click)="onDeleteProfile($event, this)">X</span>
</article>

`,
styleUrls:['sidebar.css']
})

export class SidebarComponent implements OnInit {
profiles: Profile[];
constructor (private _profileService: ProfileService, private _weatherService: WeatherService) {}
onSaveNew() {
   const cities = this._weatherService.getWeatherItems().map(function(element:
   WeatherItem){
   return element.cityName
   });
   this._profileService.saveNewProfile(cities);
}
onLoadProfile(profile:Profile){
this._weatherService.clearWeatherItems();
for (let i = 0; i < profile.cities.length; i++) {
  this._weatherService.searchWeatherData(profile.cities[i])
  .retry()
  .subscribe(
    data => {
      const weatherItem =new WeatherItem(data.name,data.weather[0].description,data.main.temp);
      this._weatherService.addWeatherItem(weatherItem);
    }
  )
}
}
onDeleteProfile (event:Event, profile: Profile) {
  event.stopPropagation();
  this._profileService.deleteProfile(profile);
}
ngOnInit(){
  this.profiles= this._profileService.getProfiles();
}
}
