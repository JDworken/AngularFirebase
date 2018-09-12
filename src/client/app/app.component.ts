import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
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
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public Pwa: PwaService, public afAuth: AngularFireAuth){

  }

  login():void{
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
    //   result => {
    //     console.log(result);
    //   }
    // );
    this.afAuth.auth.signInWithEmailAndPassword('jasonsd90@yahoo.com','blue2233').then(
      result => {
        console.log(result);
        this.afAuth.user.subscribe(user =>{
          
        })
      }
    )
    
  }

  logout():void{
    this.afAuth.auth.signOut().then(
      result => {
        console.log(result);
      }
    )
  }

  createUser(email: string, password: string):void{
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      result => {
        console.log(result);
        result.user.updateProfile({
          displayName: 'Jason Dworken',
          photoURL: ''
        });
        result.user.sendEmailVerification();
      }
    )
  }

  installPwa():void{
    this.Pwa.promptEvent.prompt();
  }

  updatePwa():void{
    window.location.reload();
  }
}
