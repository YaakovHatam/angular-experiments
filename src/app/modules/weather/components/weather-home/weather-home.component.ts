import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
   selector: 'app-weather-home',
   templateUrl: './weather-home.component.html',
   styleUrls: ['./weather-home.component.less']
})
export class WeatherHomeComponent implements OnInit {
   cities: any[] = [];
   constructor(private weatherService: WeatherService) { }

   ngOnInit(): void {

   }

   fetchCities() {
      this.weatherService.get().subscribe(res => {
         this.cities = res;
      })
   }
}
