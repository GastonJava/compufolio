import { animate, state, style, transition, trigger } from "@angular/animations";

import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BackgroundToggleService } from "src/app/secciones/nuevohero/servicios/backgroundToggle.service";
import { BodyToggleService } from "src/app/secciones/nuevohero/servicios/bodyToggle.service";
import { DevuelveEstadoVideoService } from "src/app/secciones/nuevohero/servicios/devuelveEstadoVideo.service";

@Component({
  selector: "app-sobremi",
  templateUrl: "./sobremi.component.html",
  styleUrls: ["./sobremi.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('icono', [

      state('false', style({
        opacity: '0.8'
      })),

      state('true', style({
        transform: 'rotate(25deg)', 
        transformOrigin: 'left',
        marginTop: '6px',
        marginBottom: '6px',
        marginLeft: '6px',
        marginRight: '6px',
        opacity: '0.3'
        
      })),

      transition('false <=> true', [
        animate('0.2s')
      ]),
    

     
    ]),
  ]
})
export class SobremiComponent implements OnInit {

  /** async pipes variables */
  isSunMoon$!: Observable<boolean>;
  isVideo$!: Observable<Boolean>;

  isVideo!: Boolean; // toggle del background

  constructor(
    private resolver: ComponentFactoryResolver,
    private stateserv: BackgroundToggleService,
    private toggle: BodyToggleService,
    private isVideoPlayingServ: DevuelveEstadoVideoService
    ) {}

  /* animacion del icono */
  is_over = false;

  //TOGGLE DE CAMBIAR BACKGROUND DE LUNA Y SOL
  isSunMoon!: boolean;
  
  private _opened: boolean = false; 

  ngOnInit() {

    /** ASYNC PIPE NO SUBSCRIBE */
    /* this.isSunMoon$ = this.toggle.bodyToggle$.pipe(map(state => state.bodyToggleState)); */
    this.isVideo$ = this.stateserv.state$.pipe(map(state => state.bgToggle)); 

    //obtenemos el valor del booleano con Behaviour
    /*
    this.stateserv.state$.subscribe((d) => { 
        
      this.isVideo = d.bgToggle;
      console.log("video encendio"+this.isVideo);

      if(this.isVideo){
        
      }
    }); */
   
   /*
   this.toggle._bodytoggle.subscribe((toggle) => {
      this.isSunMoon = toggle;

      if(this.isSunMoon){

      }
   });
   */

   //estado inicial de variable es true video empieza
   this.isVideoPlayingServ._videostate.subscribe();

   /*
    let tl = gsap.timeline();
    tl.to(".rotarimg", {
      y: 50,
      rotation: 10,
      duration: 1,
      ease: "none",
    });

    tl.to( ".rotarimg", {
      y: 0,
      rotation: 0,
      duration: 2,
      ease: "elastic"
    })
       */

  }

  private _toggleSidebar(){
    this._opened = !this._opened;

    console.log(this._opened);
    console.log("hice click aqui");
  }

  

  /* iconoOver() {
    this.is_over = true;
    
  }

  iconoOut(){
    this.is_over = false;
  } */
  ngOnDestroy(){
    /*
    this.stateserv._state.unsubscribe();
    this.toggle._bodytoggle.unsubscribe();
    this.isVideoPlayingServ._videostate.unsubscribe();

    */
  }
  

}