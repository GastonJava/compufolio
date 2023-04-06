import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CaruselSharedService {

  invocarSubscription = new EventEmitter();
  invocarUnsubscription = new EventEmitter();
  
  subsVar: Subscription;
  subsUnsubs: Subscription;

  constructor() { }

  // metodo eventemitter subscribir
  iniciarSubs(){
    this.invocarSubscription.emit();
  }
  
  // metodo desubscribir 
  cancelarSubs(){
    this.invocarUnsubscription.emit();
  }

}