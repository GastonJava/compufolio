import { state } from "@angular/animations";
//import { analyzeFileForInjectables } from "@angular/compiler";
//import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";
import { map } from "rxjs/operators";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";
import { TimelineLite } from "gsap/all";
import { Observable } from "rxjs";
import { BackgroundToggleService } from "src/app/secciones/nuevohero/servicios/backgroundToggle.service";
import { BodyToggleService } from "src/app/secciones/nuevohero/servicios/bodyToggle.service";
import { DevuelveEstadoVideoService } from "src/app/secciones/nuevohero/servicios/devuelveEstadoVideo.service";
import { SinEstadoInicialService } from "src/app/secciones/nuevohero/servicios/sinEstadoInicial.service";
/* import { defaultMaxListeners } from "stream"; */


@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SkillsComponent implements OnInit, OnDestroy {

  /** OBJECT LITERAL PARA GSAP */
  Clase = {
    "uno":{hcard: "hcard1", mover: "mover1", x: -10, y: -10},
    "dos":{hcard: "hcard2", mover: "mover2", x: 0, y: -10},
    "tres":{hcard: "hcard3", mover: "mover3", x: 10, y: -10},
    "cuatro":{hcard: "hcard4", mover: "mover4", x: -10, y: -10},
    "cinco":{hcard: "hcard5", mover: "mover5", x: 0, y: -10},
    "seis":{hcard: "hcard6", mover: "mover6", x: 10, y: -10},
    "siete":{hcard: "hcard7", mover: "mover7", x: -10, y: -10},
    "ocho":{hcard: "hcard8", mover: "mover8", x: 0, y: -10},
    "nueve":{hcard: "hcard9", mover: "mover9", x: 10, y: -10},
  }

  /** ASYNC PIPE OBSERVABLES VARIABLES */
  isSunToggle$: Observable<boolean>;
  isVideoOn$: Observable<Boolean>;
  
  @Input() arraycolor = Array();

  // ===== variables recibir servicios boolean
  isVideo: Boolean;
  isSunToggle: boolean;
  isVideoOn: boolean;

  indice: number = 0;

  mouseover: boolean;
  flotante = new TimelineMax();

  max = new TimelineMax(
    {onComplete: () => {this.detener()}
  });

  constructor(
    //private elRef: ElementRef
    private render: Renderer2,
    private cd: ChangeDetectorRef,
    private videoserv: BackgroundToggleService,
    private togglesunserv: BodyToggleService,
    private isVideoOnServ: SinEstadoInicialService,
    private isVideoPlayingServ: DevuelveEstadoVideoService

  ) {

  }
  
  ngOnInit() {

    if(this.indice == 8){
      this.max.kill();
    }
    
    if(window.innerWidth > 850){
      this.animacioBounce();

    }else{
      this.max.kill();
    }

    /** REEMPLAZAMOS SUBSCRIBE POR PIPE ASYNC */
    this.isSunToggle$ = this.togglesunserv.bodyToggle$.pipe(map(state => state.bodyToggleState));
    this.isVideoOn$ = this.videoserv.state$.pipe(map(state => state.bgToggle)); 

    
    // ================= escuchamos los cambios del servicio 
    /*
    this.videoserv.state$.subscribe((isVideo) => {
      this.isVideo = isVideo.bgToggle;
    });
    */

    /*
    this.togglesunserv._bodytoggle.subscribe((suntoggle) => {
      this.isSunToggle = suntoggle;
    });
    */

    this.isVideoOnServ._backgroundtoggle.subscribe((isVideOn) => {
      this.isVideoOn = isVideOn;
    });

    this.isVideoPlayingServ._videostate.subscribe((isVideoPlaying) => {
      /* console.log("esta el theme del video de fondo? : "+isVideoPlaying.videoState); */
    })


    if(!this.cd['destroyed']) {
      this.cd.detectChanges();
  
    }

  }

  animacioBounce(){

    var arr = [
      "uno", "dos", "tres",
      "cuatro", "cinco", "seis",
      "siete", "ocho", "nueve"
    ];

    var map = arr.map((valoractual) => {
      this.max.to(`.${valoractual}`, 
      {
      duration: .6,
      y:(10),
      
      repeatDelay: 16,
     
      }).
      to(`.${valoractual}`,{ /** LA IDEA ES QUE VAYA PASANDO UNO - DOS - TRES .... NUEVE */
      duration: .6,
      y:(0),
    
      repeatDelay: 16,
      onComplete: function() {
        console.log("completado");
      }
     });

    });

    /*
    arr.forEach((valoractual, index) => {
      console.log("valoractual: "+valoractual+" : indice -> "+index);

      this.max.to(`.${valoractual}`, 
      {
      duration: .6,
      y:(10),
      repeat: -1,
      repeatDelay: 16,
     
      }).
      to(`.${valoractual}`,{
      duration: .6,
      y:(0),
      repeat: -1,
      repeatDelay: 16,
      onComplete: function() {
        console.log("completado");
      }
     });

     this.indice = index;

     }

    );
    */

    if(this.indice == 8){
      
    }

    console.log("indice: "+this.indice);
    return this.max;
  }



 /** encima metodos */
 /* luego ttendre que optimizar este codigo espaguetti */

 encima(clase) {

  const tltext = gsap.timeline({
    repeat: 0,
    repeatDelay: 0,
  });

  tltext.to(`.${this.Clase[clase].hcard}`, {
    x: 0,
    rotation: 0,
    duration: 0.5,
    autoAlpha: 1,
  });
  
  tltext.to(
    `.${this.Clase[clase].mover}`,
    {
      x: `${this.Clase[clase].x}`,
      z: 40,
      y: `${this.Clase[clase].y}`,
      rotation: 0,
      duration: 1,
      scale: 1,
      autoAlpha: 1,
    },
    0
  );
}

fuera(clase){
  const tltext = gsap.timeline({
    repeat: 0,
    repeatDelay: 0,
  });

  tltext.to(`.${this.Clase[clase].hcard}`, {
    x: 0,
    rotation: 0,
    duration: 0.5,
    autoAlpha: 0,
    scale: 0.9,
  });

  tltext.to(
    `.${this.Clase[clase].mover}`,
    {
      x: 0,
      rotation: 0,
      duration: 1,
      scale: 1,
      autoAlpha: 0,
    },
    0
  );

}

detener(){
  this.max.kill();
}

ngOnDestroy(){


  /*
  this.videoserv._state.unsubscribe();
  this.togglesunserv._bodytoggle.unsubscribe();
  this.isVideoPlayingServ._videostate.unsubscribe();
  this.isVideoOnServ._backgroundtoggle.unsubscribe();

  */

  console.log("destruido animaciones skills");
  this.max.kill();
}

}