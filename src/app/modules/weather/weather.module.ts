import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherService } from './services/weather.service';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';


@NgModule({
   declarations: [
      WeatherHomeComponent
   ],
   providers: [
      WeatherService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: JwtInterceptor,
         multi: true
      }
   ],
   imports: [
      CommonModule,
      WeatherRoutingModule,
      HttpClientModule
   ]
})
export class WeatherModule { }
