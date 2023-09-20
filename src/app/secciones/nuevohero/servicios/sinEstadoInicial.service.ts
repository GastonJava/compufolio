import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SinEstadoInicialService {

  bgtoggle!: boolean;

  public _backgroundtoggle = new Subject<boolean>();

  setEstado(bgtoggle: boolean) {
    this._backgroundtoggle.next(bgtoggle);
  }

}
