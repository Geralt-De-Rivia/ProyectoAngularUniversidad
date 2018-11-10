import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit  {
  title = 'ProyectoAngularUniversidad';

  ngOnInit () {
    firebase.initializeApp({
      apiKey: "AIzaSyC9DrIPCKLMYuwLfmRHy8iClwHUu0-MH5I",
      authDomain: "triper-af1f8.firebaseapp.com",
      databaseURL: "https://triper-af1f8.firebaseio.com",
      projectId: "triper-af1f8",
      storageBucket: "triper-af1f8.appspot.com",
      messagingSenderId: "1005250544738"
    });
  }
  
}
