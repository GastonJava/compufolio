import { Component, ElementRef, EventEmitter, HostListener, Inject, Injector, NgModuleFactory, Output, Renderer2, ViewChild, ViewContainerRef} from "@angular/core"; /** SystemJsNgModuleLoader  */

import {

} from "../app/secciones/webapp/webappmarco/sobremi/route-animations";

import { from, Observable } from "rxjs";
import { filter, map, reduce } from "rxjs/operators";
import { DOCUMENT, ViewportScroller } from "@angular/common";
import { ActivatedRoute, Router, Event, NavigationStart } from "@angular/router";
import { BodyToggleService } from "./secciones/nuevohero/servicios/bodyToggle.service";
import { FlechaStateService } from "./secciones/nuevohero/servicios/flechaState.service";
import { BackgroundToggleService } from "./secciones/nuevohero/servicios/backgroundToggle.service";

import { gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [/* slider, */ /* transform, */],

})
export class AppComponent {
  id = "tsparticles";

  // BOLEANO PIPE OBSERVABLE
  isVideo$!: Observable<Boolean>;

  // variable para cambiar de valores al presionar el toggle superior
  cantparticles: number = 50;

  /* CARGANDO CIRCULO */
  public showOverlay = true;
  _opened: boolean = false;

  title = "Gaston Ale Dev";

  over: boolean = false;

  public bdback!: boolean;

  //========== contador de veces quellega al bottom
  counter: number = 0;
  currentRoute: any;

  //======================= boolean flecha is hidden
  isFlechaHidden!: boolean;

  // ====================== variable body
  @ViewChild('body') body!: ElementRef;

  @ViewChild("btncontainer", { static: true }) btncontainer!: ElementRef;
  @ViewChild("textobtn", { static: true }) textobtn!: ElementRef;

  constructor(

    @Inject(DOCUMENT) private document: Document,

    private render: Renderer2,
    private viewport: ViewportScroller,
    private route: Router,
    private routeActivated: ActivatedRoute,
    private bodyserv: BodyToggleService,
    private flechaserv: FlechaStateService,

    private stateserv: BackgroundToggleService,


  ) {/*gsap.registerPlugin(ScrollToPlugin); */ }

  /* ESTE EVENTO SERA TRIGGER COMPONENTE SOBREMI AL CARGARSE APP COMPONENT ROOT */
  @Output() boleanoEmitir = new EventEmitter<Boolean>();

  ngOnInit() {

    this.counter++;

    this.isVideo$ = this.stateserv.state$.pipe(map(state => state.bgToggle));

    this.route.events.subscribe((ruta: Event) => { // escuchamos la ruta actual

      if (ruta instanceof NavigationStart) {
        console.log("inicia ahora el navigationStart");
        this.currentRoute = ruta.url;
        console.log("RUTA ACTUAL DE APP COMPONENT: " + this.currentRoute);

        if (this.currentRoute == "/nuevohero" || this.currentRoute == "/") {
          this.currentRoute = "/nuevohero";
          console.log("TIENE QUE QUEDARSE EN HERO");
        } else {
          console.log("TIENE QUE BAJAR A WEBAPP");
          window.scrollTo(0, document.body.scrollHeight);
        }

      }
    });

    gsap.from('.hero__subtitulo', {
      y: 40,
      duration: 0.5,
      delay: 1.5
    });


    gsap.from('.hero__subtitulo1', {
      y: 50,
      duration: 0.5,
      delay: 2

    });

    /* this.scrollgsap(); */
    this.boleanoEmitir.emit(true);

    //create the "Hello world" observable
    const myObs = from("HOLA GASTON");

    //apply the filter operator
    const filteredObs = myObs.pipe(filter((char) => char != " "));

    //subscribe to the filtered observable
    const subscription = filteredObs.subscribe((char) => console.log(char));

    //this.load();

  }

  ngAfterViewInit() {
    this.isVideo$.subscribe(data => {

      if (data) { //Cuando el video este reproduciendo bajaremos cantidad de particulas
        this.cantparticles = 50;
        console.log("particulas serian: 50: " + this.cantparticles);

      } else {
        this.cantparticles = 5;
        console.log("particulas serian: 5: " + this.cantparticles);
      }


    });
  }

  load() {}

  onMouseover() {
    this.render.setStyle(
      this.btncontainer.nativeElement,
      "background-color",
      "white"
    );
    this.render.setStyle(this.textobtn.nativeElement, "color", "blue");
  }

  onMouseout() {
    this.render.setStyle(
      this.btncontainer.nativeElement,
      "background-color",
      "transparent"
    );

    this.render.setStyle(this.textobtn.nativeElement, "color", "white");
  }

  _toggleSidebar() {
    this._opened = !this._opened;

    console.log("booleano: " + this._opened);
  }

  //aca recibiendo evento al presionar img desde nuevo hero component
  public scrollView(el: HTMLElement): void {
    el.scrollIntoView({ behavior: "smooth" });
  }

  /* VAMOS A PROBAR CUANDO EL SCROLL LLEGUE AL FINAL DE LA PAGINA abrir sobremi page*/
  @HostListener("window:scroll", [])
  onScroll(): void {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {


      if (this.counter == 1 && this.currentRoute == "/nuevohero") {
        /* console.log("contador en onScroll dentro del if: "+this.counter); */
        this.route.navigateByUrl("/sobremi");
        this.counter = 0;
      }
    }

    // cuando pase la mitad de webapp mostrar flecha else: esconder flecha
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      this.isFlechaHidden = false;
      /* console.log("escondemos la flecha?: false "+this.isFlechaHidden); */
      this.flechaserv.flechaEstado(this.isFlechaHidden);
    } else {
      this.isFlechaHidden = true;
      /* console.log("escondemos la flecha?: true "+this.isFlechaHidden);  */
      this.flechaserv.flechaEstado(this.isFlechaHidden);
    }

  }

}