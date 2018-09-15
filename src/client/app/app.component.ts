import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { PwaService } from "./pwa.service";
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  email = new FormControl('', [Validators.required, Validators.email]);
  usersCollection: AngularFirestoreCollection<any>;
  users: Observable<any[]>;
  particleStyle: object = {};
  particleParams: object = {};
  width = 100;
  height = 100;

  constructor(public Pwa: PwaService, public afAuth: AngularFireAuth, public afFs: AngularFirestore){

  }

  ngOnInit():void{
    this.particleStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.particleParams = {
      particles: {
        number: {
            value: 200,
        },
        color: {
            value: '#000000'
        },
        shape: {
            type: 'triangle',
        },
      }
    };
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
          this.usersCollection = this.afFs.collection<any>('users');
          this.users = this.usersCollection.valueChanges();
          
          
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
        this.usersCollection.add({name: {first: 'test', middle: '', last:'test'}});
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
