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
import { Container, Main } from "tsparticles";
import { Background } from "tsparticles/Options/Classes/Background/Background";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [/* slider, */ /* transform, */],

})
export class AppComponent {
  id = "tsparticles";

  // BOLEANO PIPE OBSERVABLE
  isVideo$: Observable<Boolean>;

  // variable para cambiar de valores al presionar el toggle superior
  cantparticles: number = 50;


  /*
  width: number = 100;
  height: number = 100;
  myStyle: Object = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParams: object = {
   
    "particles": {
      "number": {
        "value": this.cantparticles,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#141414"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.4,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 0.8,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.7
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  */

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: {
          color: "#30323C"
        },
        /*
        value: {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 0
          #30323C
        }
        */
       "zIndex": -1,
      },
      
    },
    fpsLimit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onHover: {
          enable: false,
          mode: "repulse",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#121212"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.8,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "bounce",
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 60
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    "fullScreen": {
      "enable": true,
      "zIndex": -1,
    },
    detectRetina: false
  };

  particlesLoaded(container: Container): void {
    console.log(container);
    container.particles.addParticle(
      
    );
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }


  /* CARGANDO CIRCULO */
  public showOverlay = true;
  _opened: boolean = false;

  title = "Gaston Ale Dev";

  over: boolean = false;

  public bdback: boolean;

  //========== contador de veces quellega al bottom
  counter: number = 0;
  currentRoute: any;

  //======================= boolean flecha is hidden
  isFlechaHidden: boolean;

  // ====================== variable body
  @ViewChild('body') body: ElementRef;

  @ViewChild("btncontainer", { static: true }) btncontainer: ElementRef;
  @ViewChild("textobtn", { static: true }) textobtn: ElementRef;

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

        /*
        if(this.currentRoute != "/nuevohero"){
          console.log("inicia ahora cualquier ruta de webappmarco");
          window.scrollTo(0, document.body.scrollHeight); 
        }else{

        } */

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

  load() {
    /*  console.log("carga la funcion load()");
    return import('../app/secciones/webapp/webappmarco/sobremi/sobremi.module').then(m => m.SobremiModule); */

  }

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


  //============== implementemos ela flecha que te desliza hacia arriba

  /*   scrollgsap() {
      gsap.timeline({
        
        scrollTrigger: {
          trigger: "#webapp",
          pin: true, 
          start: "top top",
          end: "+=900",
          scrub: 1,
          markers: true,
          snap: {
            snapTo: "labels",
            duration: {min: 0.2, max: 3},
            delay: 0.2,
            ease: "power1.inOut"
          }
        }
      });
    
      
    } */

  /* this.tl.to(".box", {yPercent: 350, duration: 1})
       tl.to(".box", {rotation: 360, duration: 3})
       tl.to(".box", {xPercent: 350, duration: 1}) */



  /* SCROLL PARA HACERLO SMOOTH CON  */
  /*  scrollable(elementId: string): void {
     this.viewport.scrollToAnchor(elementId);
   } */

  /* scroll smooth con hostlistener */
  /* @HostListener('window:scroll', ['$event'])
   scrollHandler(event) {
     if(window.scrollY > 100 && window.scrollY < 1300){
      this.scrollable('webapp');
      console.debug("Scroll Event");
     }else {
      this.scrollable('nuevohero');
     }   
   
  } */

}