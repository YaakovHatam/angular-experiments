import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { HomeComponent } from './components/home/home.component';
import { LiveSearchComponent } from './components/live-search/live-search.component';
import { QuotePipe } from './pipes/quote.pipe';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LiveSearchComponent,
      QuotePipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireMessagingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
