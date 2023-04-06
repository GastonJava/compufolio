import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_STATE: VideoState = {
  videoState: false
};

@Injectable({
  providedIn: 'root'
})
export class DevuelveEstadoVideoService {
  
  public _videostate = new BehaviorSubject<VideoState>(INITIAL_STATE); 
  videostate = this._videostate.asObservable();
  cambiarEstado(isVideoPlaying: boolean){

    const oldVideoState = this._videostate.getValue(); 

    this._videostate.next(
      {
      ...oldVideoState,
      videoState: isVideoPlaying
      }
    );
    
  }

}

export interface VideoState {
  videoState: boolean;
}