import { Injectable } from '@angular/core';
import {
   HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

   intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {

      const modifiedReq = req.clone({
         headers: req.headers.set('Authorization', `Bearer ${window.localStorage.getItem('token')}`),
      });

      return next.handle(modifiedReq);
   }
}