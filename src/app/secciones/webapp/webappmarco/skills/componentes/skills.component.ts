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

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SkillsComponent implements OnInit, OnDestroy {
  /** ASYNC PIPE OBSERVABLES VARIABLES */
  isSunToggle$!: Observable<boolean>;
  isVideoOn$!: Observable<Boolean>;

  @Input() arraycolor = Array();

  // ===== variables recibir servicios boolean
  isVideo!: Boolean;
  isSunToggle!: boolean;
  isVideoOn!: boolean;

  indice: number = 0;

  mouseover!: boolean;
  flotante = new TimelineMax();

  max = new TimelineMax({
    onComplete: () => {
      this.detener();
    },
  });

  constructor(
    //private elRef: ElementRef
    private render: Renderer2,
    private cd: ChangeDetectorRef,
    private videoserv: BackgroundToggleService,
    private togglesunserv: BodyToggleService,
    private isVideoOnServ: SinEstadoInicialService,
    private isVideoPlayingServ: DevuelveEstadoVideoService
  ) {}

  ngOnInit() {
    if (this.indice == 8) {
      this.max.kill();
    }

    if (window.innerWidth > 850) {
      this.animacioBounce();
    } else {
      this.max.kill();
    }

    /** REEMPLAZAMOS SUBSCRIBE POR PIPE ASYNC */
    this.isSunToggle$ = this.togglesunserv.bodyToggle$.pipe(
      map((state) => state.bodyToggleState)
    );
    this.isVideoOn$ = this.videoserv.state$.pipe(
      map((state) => state.bgToggle)
    );

    this.isVideoOnServ._backgroundtoggle.subscribe((isVideOn) => {
      this.isVideoOn = isVideOn;
    });

    this.isVideoPlayingServ._videostate.subscribe((isVideoPlaying) => {
      /* console.log("esta el theme del video de fondo? : "+isVideoPlaying.videoState); */
    });

    if (!this.cd.detach) {
      this.cd.detectChanges();
    }
  }

  animacioBounce() {
    var arr = [
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
    ];

    var map = arr.map((valoractual) => {
      this.max
        .to(`.${valoractual}`, {
          duration: 0.6,
          y: 10,

          repeatDelay: 16,
        })
        .to(`.${valoractual}`, {
          /** LA IDEA ES QUE VAYA PASANDO UNO - DOS - TRES .... NUEVE */
          duration: 0.6,
          y: 0,

          repeatDelay: 16,
          onComplete: function () {
            console.log("completado");
          },
        });
    });

    return this.max;
  }

  detener() {
    this.max.kill();
  }

  ngOnDestroy() {
    this.max.kill();
  }
}