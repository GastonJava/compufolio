import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BackgroundToggleService, State } from '../nuevohero/servicios/backgroundToggle.service';
import { BodyToggleService } from '../nuevohero/servicios/bodyToggle.service';
import { DevuelveEstadoVideoService } from '../nuevohero/servicios/devuelveEstadoVideo.service';
import { SinEstadoInicialService } from '../nuevohero/servicios/sinEstadoInicial.service';

@Component({
  selector: 'app-botonswitch',
  templateUrl: './botonswitch.component.html',
  styleUrls: ['./botonswitch.component.scss']
})
export class BotonswitchComponent implements OnInit {


  @ViewChild('video') video!: ElementRef;

  //ASYNC PIPE VARIABLE
  bgToggle$!: Observable<Boolean>;
  state$!: Observable<State>

  public isVideoBackground: Boolean = false; // TRUE -- 2022
  public isSunOrMoon: boolean = true;
  public isVideoOn: boolean = true;
  public isVideoPlaying: boolean = false; // TRUE -- 2022

  public classes = this.elem.nativeElement.ClassList;

  public body = document.body;

  constructor(
    private stateserv: BackgroundToggleService,
    private elem: ElementRef,
    private bodyserv: BodyToggleService,
    private renderer: Renderer2,
    private sinestadoserv: SinEstadoInicialService,

    //isVideoPlayingServ: Estado TRUE si esta video "playing"
    private isVideoPlayingServ: DevuelveEstadoVideoService,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    if (!this.isVideoBackground) {
      this.video.nativeElement.pause();
      this.video.nativeElement.style.display = "none";
    } else {
      this.video.nativeElement.play();
      this.video.nativeElement.style.display = "block";
    }
  }

  playPause(): void {
    if (!this.isVideoBackground) {
      this.video.nativeElement.pause();
      this.video.nativeElement.style.display = "none";
    } else {
      this.video.nativeElement.play();
      this.video.nativeElement.style.display = "block";
    }
    //var myVideo: any = document.getElementById("video");

    //if (myVideo.paused) myVideo.play();
    //else myVideo.pause();

  }

  // cambia el estado del servicio ejemplo: si es TRUE al presionar cambia a FALSE (SWITCH)
  cambiarToggle() {

    this.isVideoPlaying = !this.isVideoPlaying; // Solo verifica STATE del video
    this.isVideoPlayingServ.cambiarEstado(this.isVideoPlaying);

    this.stateserv.cambiarEstado(this.isVideoBackground);
    this.isVideoBackground = !this.isVideoBackground; // Solo verifica STATE del background

    var miVideo: any = document.getElementById('video');

    console.log("console background desde boton switch: " + this.isVideoBackground); // cuando es true el video esta escondido

    if (this.isVideoBackground) {
      
      /* this.isSunOrMoon = true; */

    } else {
      /* this.isSunOrMoon = false; */
    }

    //flag para el cambio de video on/off
    this.sinestadoserv.setEstado(this.isVideoOn);
    this.isVideoOn = !this.isVideoOn;

  }

  cambiarBdBackground() {
    console.log("sun or moon: " + this.isSunOrMoon);

    if (this.isSunOrMoon) {
      this.renderer.addClass(this.body, 'body_moon');
      this.renderer.removeClass(this.body, 'body_sun');
    }

    if (!this.isSunOrMoon) {
      this.renderer.addClass(this.body, 'body_sun');
      this.renderer.removeClass(this.body, 'body_moon');
    }
    this.isSunOrMoon = !this.isSunOrMoon;
    this.bodyserv.setEstado(this.isSunOrMoon);
  }
}