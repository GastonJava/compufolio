import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

const INITIAL_STATE: BackgorundToggleState = {
  bodyToggleState: true
};

@Injectable({
  providedIn: 'root'
})
export class BodyToggleService {

  bdtoggle!: boolean;

  public _bodytoggle = new BehaviorSubject<BackgorundToggleState>(INITIAL_STATE);
  bodyToggle$ = this._bodytoggle.asObservable();

  setEstado(isBdToggle: boolean) {

    const oldBodyToggleState = this._bodytoggle.getValue(); 
    
    this._bodytoggle.next(
      {
      ...oldBodyToggleState,
      bodyToggleState: isBdToggle
      }
    );
  }
}

export interface BackgorundToggleState {
  bodyToggleState: boolean;
}