import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-push-register-button',
   templateUrl: './push-register-button.component.html',
   styleUrls: ['./push-register-button.component.less']
})
export class PushRegisterButtonComponent implements OnInit {


   readonly VAPID_PUBLIC_KEY = "BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo";

   constructor(
      private swPush: SwPush,
      private newsletterService: NewsletterService) { }

   subscribeToNotifications() {

      this.swPush.requestSubscription({
         serverPublicKey: this.VAPID_PUBLIC_KEY
      })
         .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
         .catch(err => console.error("Could not subscribe to notifications", err));
   }

}
