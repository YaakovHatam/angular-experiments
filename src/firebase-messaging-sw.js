/ Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/[the number of version matching with firebase in package.json]/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/[for example: 7.16.1]/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
   apiKey: "AIzaSyBoNtdAKOr0Mk4eclh_wVpZr_nvysjWZW0",
   authDomain: "angular-experiments-yh.firebaseapp.com",
   projectId: "angular-experiments-yh",
   storageBucket: "angular-experiments-yh.appspot.com",
   messagingSenderId: "726928613285",
   appId: "1:726928613285:web:8a33e6e1cad0e72204124c",
   measurementId: "G-58HH7204ES"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();