import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule, 
  MatButtonModule, 
  MatIconModule, 
  MatIconRegistry, 
  MatFormFieldModule,
  MatInputModule } from "@angular/material";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ParticlesModule } from "angular-particle";
import { ParticleEffectButtonModule } from 'angular-particle-effect-button';

import { AppComponent } from './app.component';
import { ProfileModule } from "./profile/profile.module";
import { AppRoutingModule } from './app-routing.module';
import { PwaService } from "./pwa.service";

import { RouteComponent } from "./route.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ProfileModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ParticlesModule,
    ParticleEffectButtonModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    MatIconRegistry,
    PwaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
