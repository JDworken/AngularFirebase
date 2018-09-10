import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  public promptEvent: any;
  public updateEvent: any;
  
  constructor(public swUpdate: SwUpdate) { 
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });

    swUpdate.available.subscribe(event =>{
      this.updateEvent = event;
    });
  }
}
