import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_STATE: State = {
  bgToggle: undefined
};

@Injectable({
  providedIn: 'root'
})

export class BackgroundToggleService {

  /* public _state = new BehaviorSubject<State>(INITIAL_STATE); */
  public _state = new BehaviorSubject<State>(INITIAL_STATE); 
  state$ = this._state.asObservable();

  cambiarEstado(nuevoToggle: Boolean){
    const oldState = this._state.getValue();
    this._state.next({
      ...oldState,
      bgToggle: nuevoToggle 
    });
    
  }

}

export interface State {
  bgToggle: Boolean
}