
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
  @ViewChild('video') video!: ElementRef;
  @ViewChild('src') src!: ElementRef;
  isPlay: boolean = false;

  toggleVideo(event: any) {
    this.video.nativeElement.play();
  }

  bgToggle$!: Observable<Boolean>;
  state$!: Observable<State>;
  cambiarFondo$!: Observable<boolean>;

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



  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  // cambiar el color del fondo
  changeBackground() {

  }

  ngOnDestroy() {

  }

}