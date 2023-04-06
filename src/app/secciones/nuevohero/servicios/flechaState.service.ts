import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_STATE: FlechaState = {
  flechaState: true
};

@Injectable({
  providedIn: 'root'
})

export class FlechaStateService {

  public _flechastate = new BehaviorSubject<FlechaState>(INITIAL_STATE); 
  flechastate$ = this._flechastate.asObservable();

  flechaEstado(isFlechaHidden: boolean){
    const oldFlechaState = this._flechastate.getValue(); 
    this._flechastate.next(
      {
      ...oldFlechaState,
      flechaState: isFlechaHidden
      }
    );
    
  }
}
export interface FlechaState {
  flechaState: boolean;
}