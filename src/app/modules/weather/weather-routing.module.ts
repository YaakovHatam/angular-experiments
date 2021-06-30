import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';

const routes: Routes = [
   { path: '', component: WeatherHomeComponent, pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class WeatherRoutingModule { }
