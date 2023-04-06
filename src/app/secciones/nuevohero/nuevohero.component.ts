
/* import { gsap } from 'gsap' */
import { Component, OnInit, Output, EventEmitter, Input, ElementRef, Renderer2, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

/* import { SplitText } from 'gsap/SplitText'; */
import { Observable } from 'rxjs';
import { BackgroundToggleService, State } from './servicios/backgroundToggle.service';
import { map } from 'rxjs/operators';
import { BodyToggleService } from './servicios/bodyToggle.service';
import { SinEstadoInicialService } from './servicios/sinEstadoInicial.service';
import { DevuelveEstadoVideoService } from './servicios/devuelveEstadoVideo.service';

@Component({
  selector: 'app-nuevohero',
  templateUrl: './nuevohero.component.html',
  styleUrls: ['./nuevohero.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class NuevoheroComponent implements OnInit {

  @Output()
  public dioClick: EventEmitter<void> = new EventEmitter();

  /** ================ video player ======== */
  @ViewChild('video') video: ElementRef;
  @ViewChild('src') src: ElementRef;
  isPlay: boolean = false;

  toggleVideo(event: any) {
    this.video.nativeElement.play();
  }

  bgToggle$: Observable<Boolean>;
  state$: Observable<State>;
  cambiarFondo$: Observable<boolean>;

  public isVideoBackground: Boolean = false; // TRUE -- 2022
  public isSunOrMoon: boolean = true;
  public isVideoOn: boolean = true;
  public isVideoPlaying: boolean = false; // TRUE -- 2022

  public classes = this.elem.nativeElement.ClassList;

  /* textosplit = new SplitText(".hero__subtitulo1", {type: "words, chars"}); */

  constructor(
    //stateserv: devuelve el ESTADO del background glassmorphism o neutral
    private stateserv: BackgroundToggleService,

    private elem: ElementRef,
    private bodyserv: BodyToggleService,
    private sinestadoserv: SinEstadoInicialService,

    //isVideoPlayingServ: Estado TRUE si esta video "playing"
    //private isVideoPlayingServ: DevuelveEstadoVideoService,
    private cambiarFondoServ: DevuelveEstadoVideoService,

    private renderer: Renderer2,
    private change: ChangeDetectorRef
  ) {

    console.log("nuevo hero cambiarfondo: "+this.cambiarFondo$);

   }



  /*
  ngAfterViewInit() {
    var myVideo: any = document.getElementById("video");
    var src: any = document.getElementById('video_source');

    if (window.innerWidth > 980) {
      src.setAttribute('src', "assets/nuevohero/backgroundvideo_3mb_1980.webm");

      myVideo.load();
    } else {
      myVideo.autoplay = false; 
      if (!myVideo.autoplay) {

        this.renderer.removeAttribute(this.src.nativeElement, 'src');
      }
    }

    this.change.detectChanges();
  }
  */

  public body = document.body;

  ngOnInit() {
    //window.scroll(0, 0);

    this.bgToggle$ = this.stateserv.state$.pipe(map(state => state.bgToggle));

    //un Observable AsObservable
    this.state$ = this.stateserv.state$;

    //recibimos el cambio del boton switch fondo
    //this.cambiarFondo$ = this.cambiarFondoServ.videostate.pipe(map(state => state.videoState));

    console.log("nuevo hero cambiarfondo: "+this.cambiarFondo$);
    
    //this.cambiarFondoServ.cambiarEstado(this.isVideoPlaying);


  }

  ngAfterViewInit() {   
    this.cambiarFondo$ = this.cambiarFondoServ.videostate.pipe(map(state => state.videoState));
  }

  

  
  /*
  ngAfterViewInit() {
 
    
    if (!this.cambiarFondo$) {
      this.video.nativeElement.pause();
      this.video.nativeElement.style.display = "none";
    } else {
      this.video.nativeElement.play();
      this.video.nativeElement.style.display = "block";
    }
    
  }
  */

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  // cambiar el color del fondo
  changeBackground() {

  }

  /** ==================================== METODOS VIDEO DE FONDO */
  // pausar el video al cambiar de theme
/*
  playPause() {
    
    if (!this.cambiarFondo$) {
      this.video.nativeElement.pause();
      this.video.nativeElement.style.display = "none";
    } else {
      this.video.nativeElement.play();
      this.video.nativeElement.style.display = "block";
    }
    

  }

  */

  /*
  makeSmall() {
    var myVideo: any = document.getElementById("video");
    myVideo.width = 320;
  }
  */

  /*
  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value) { // VALUE (-1 = volver atras 1 segundo ---- 1 = avanzar adelante 1 segundo)
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }
  */
  /** ==================================== METODOS VIDEO DE FONDO */

/*
  cambiarToggle() {

    this.isVideoPlaying = !this.isVideoPlaying; 
    this.cambiarFondoServ.cambiarEstado(this.isVideoPlaying);

    this.stateserv.cambiarEstado(this.isVideoBackground);
    this.isVideoBackground = !this.isVideoBackground; 

    var miVideo: any = document.getElementById('video');

    console.log("console background: " + this.isVideoBackground);


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
  */

  ngOnDestroy() {

  }

}