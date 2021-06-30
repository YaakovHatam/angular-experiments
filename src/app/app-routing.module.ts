import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LiveSearchComponent } from './components/live-search/live-search.component';

const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'search', component: LiveSearchComponent },
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
