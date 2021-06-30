import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
@Injectable()
export class WeatherService {

   constructor(private httpClient: HttpClient) { }

   get(): Observable<any[]> {

      return this.httpClient.get<any[]>('http://localhost:3000/cities').pipe(take(1));
   }
}
