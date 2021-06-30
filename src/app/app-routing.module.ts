import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   {
      path: 'weather',
      loadChildren: () => import('./modules/weather/weather.module').then(m => m.WeatherModule)
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
