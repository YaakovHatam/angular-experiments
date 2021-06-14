import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { SwPush } from '@angular/service-worker';

@Component({
   selector: 'app-push-register-button',
   template: `<button (click)="requestPermission()">
   Hello this is a chat app. You should let us send you notifications for this reason.
 </button>`,
   styleUrls: ['./push-register-button.component.less']
})
export class PushRegisterButtonComponent {
   constructor(private afMessaging: AngularFireMessaging) { }
   requestPermission() {
      this.afMessaging.requestPermission
         .pipe(mergeMapTo(this.afMessaging.tokenChanges))
         .subscribe(
            (token) => { console.log('Permission granted! Save to the server!', token); },
            (error) => { console.error(error); },
         );
   }
}
function mergeMapTo(tokenChanges: Observable<string | null>): import("rxjs").OperatorFunction<void, unknown> {
   throw new Error('Function not implemented.');
}

