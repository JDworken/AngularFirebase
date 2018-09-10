import { Component } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

import { PwaService } from "./pwa.service";
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public Pwa: PwaService, public afAuth: AngularFireAuth){

  }

  login():void{
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  installPwa():void{
    this.Pwa.promptEvent.prompt();
  }

  updatePwa():void{
    window.location.reload();
  }
}
