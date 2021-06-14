import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushRegisterButtonComponent } from './components/push-register-button/push-register-button.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';


@NgModule({
   declarations: [
      AppComponent,
      PushRegisterButtonComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
         enabled: environment.production,
         // Register the ServiceWorker as soon as the app is stable
         // or after 30 seconds (whichever comes first).
         registrationStrategy: 'registerWhenStable:30000'
      }),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireMessagingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
