import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from "@angular/core";
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { EmailService } from "../servicios/email.service";
import { animate, trigger, state, style, transition, query, stagger } from '@angular/animations';
import { animacion_sidebar, left, right, slideInOutAnimation } from "../animaciones/animaciones";
import { transiciones } from "../sobremi/route-animations";
import { RouterOutlet } from "@angular/router";
import { BackgroundToggleService } from "src/app/secciones/nuevohero/servicios/backgroundToggle.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BodyToggleService } from "src/app/secciones/nuevohero/servicios/bodyToggle.service";
import { DevuelveEstadoVideoService } from "src/app/secciones/nuevohero/servicios/devuelveEstadoVideo.service";
import { FlechaStateService } from "src/app/secciones/nuevohero/servicios/flechaState.service";


@Component({
  selector: "app-webappmarco",
  templateUrl: "./webappmarco.component.html",
  styleUrls: ["./webappmarco.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,

   animations: [
    /*fader, */
    /* routerTransition, */
    /* transform, */
   /* slider, */
   transiciones, /* <--- efecto cambio de ventanas en webapp marco */
   /* cambioRuta, */
    
    /* animacionsidebar, */


    /* boton de menu desplegable mobile */
    trigger('changeState', [

      state('normal', style({
        backgroundColor: 'wheat'
      })),

      state('topX', style({
        transform: 'rotate(45deg)', 
        transformOrigin: 'left',
        marginTop: '6px',
        marginBottom: '6px',
        marginLeft: '6px',
        marginRight: '6px',
        backgroundColor:'wheat',
        
      })),

      state('escondido', style({
        opacity: 0,
      })),

      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        marginTop: '6px',
        marginBottom: '6px',
        marginLeft: '6px',
        marginRight: '6px',
        backgroundColor:'wheat',
        
      })),

      transition('* => *', [
        animate('0.6s')
      ]),
    ]),
  ],
})

export class WebappmarcoComponent implements OnInit, OnDestroy {

  @Output () 
  public dioClickFlecha: EventEmitter<void> = new EventEmitter();

  //========= is video playing? ==========
  isVideoPlaying: boolean;

  isHamburguer = true;

  //========= esconder el formulario display:none
  hiddenForm: boolean;

  //===== variables del input form
  getemail: any;
  getcampo: any;

  /* animacion de sidebar */
  _animate: boolean = true;
  esNormal = true;

  @ViewChild('fondoside') fondo: ElementRef;
  @ViewChild('asclasefondo') clase_fondo: ElementRef;
  @ViewChild('aszindex') z_index: ElementRef;
  @ViewChild('btn_zindex') btn_zindex: ElementRef;
  @ViewChild('opacidad') opacidad: ElementRef;
  @ViewChild('anchodiv') anchoDiv: ElementRef;

  /* FORMULARIO */

  nodeMailerForm: UntypedFormGroup;

  /* inputs: FormGroup; */
  mensajeRespuesta: string; 
  form: UntypedFormGroup;
  email: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  mensaje: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  honeypot: UntypedFormControl = new UntypedFormControl();
  isLoading: boolean = false;
  enviado: boolean = false;
 
  /** ASYNC PIPE VARIABLES */
  toggle$: Observable<Boolean>;
  isVideoPlaying$: Observable<boolean>;
  isSunOrMoon$: Observable<boolean>;
  isFlechaHidden$: Observable<boolean>;

  isVideo: Boolean;
  isSunOrMoon: boolean;

  // =========== isFlechaHidden
  isFlechaHidden: boolean;

  constructor(
    private render: Renderer2,
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder,
    private emalservice: EmailService,
    private cd: ChangeDetectorRef,
    private stateserv: BackgroundToggleService,
    private _sunormoonserv: BodyToggleService,
    private isVideoPlayingServ: DevuelveEstadoVideoService,
    private flechaServ: FlechaStateService,
    private cdref: ChangeDetectorRef
    ) {

    /* FORMULARIO */
    this.form = this.formBuilder.group({
      email: this.email,
      mensaje: this.mensaje,
      honeypot: this.honeypot
    });

    // ====== GETTERS PARA INPUTS DEL FORM
    this.getemail = this.form.get('email');
    this.getcampo = this.form.get('mensaje');
  }

  _opened: boolean = true; 
  _mostrar: boolean = true;
  anchodiv: number = 0;

  public state: string = "inactivo";


  ngOnInit() {
   
   /** remplazamos subscribes por async pipe */
   this.toggle$ = this.stateserv.state$.pipe(map(state => state.bgToggle));
   this.isVideoPlaying$ = this.isVideoPlayingServ.videostate.pipe(map(state => state.videoState));
   this.isSunOrMoon$ = this._sunormoonserv.bodyToggle$.pipe(map(state => state.bodyToggleState));
   this.isFlechaHidden$ = this.flechaServ.flechastate$.pipe(map(state => state.flechaState));

   console.log("is video playing WEBAPPCOMPONENT: "+this.isVideoPlaying$);
   
    /*
    this.isVideoPlayingServ._videostate.subscribe((isVideoPlaying) => {
      this.isVideoPlaying = isVideoPlaying.videoState;
    });
    */ 

    //obtenemos el valor del booleano con Behaviour   
    /* 
    this.stateserv.state.subscribe((d) => {
      this.isVideo = d.bgToggle;
      console.log("video encendio: "+this.isVideoPlaying);
    });
    */

    /*
    this._sunormoonserv._bodytoggle.subscribe((toggle) => {
      this.isSunOrMoon = toggle;
    });
    */
    
    /*
    this.flechaServ._flechastate.subscribe((isFlechaHidden) => {
      this.isFlechaHidden = isFlechaHidden.flechaState;
    }); */
     
    console.log(this._opened); 
    this.nodeMailerForm = this.formBuilder.group(
    {
      email: [null, [Validators.required]],
      mensaje: [null, [Validators.required]]
    });

   /* gsap.from("a", {
      duration: 0.5,
      autoAlpha: 0,
      x: "-=200",
      scale: 3,
      stagger: 0.2,
    }); */

   /*  this._opened = true;
    this._mostrar = true; */
    /* const aszindex = this.z_index.nativeElement; */
  }

  ngAfterViewInit() {
     //=============== METODO PARA DETECTAR AL INICIAR ESTA ABIERTO EL SIDEBAR
     this.anchodiv = this.anchoDiv.nativeElement.offsetWidth;


     console.log("en ng init: "+this.anchoDiv);
     if(this.anchodiv > 980){
         console.log("funciona mayor a 980px en nginit");
         this.hiddenForm = false;
     }else{
 
       if(this._opened){ 
         this.hiddenForm = true;
 
       }else{ 
         this.hiddenForm = false;
 
       }
     } 

     this.cdref.detectChanges();
  }

  
  prepareRoute(outlet: RouterOutlet){
    return outlet.activatedRouteData.state;
  } 

  enviarMail(){

    alert("funciona gaston");
    let email = this.nodeMailerForm.value.email;
    let mensaje = this.nodeMailerForm.value.mensaje;

    let req = {
      email: email,
      mensaje: mensaje

    }

    this.emalservice.enviarMensaje(req).subscribe(dato => {
      console.log("este es el: "+dato);
    })

  }

  /* FormDataGroup(){
    this.inputs = new FormGroup(
      {
        Email: new FormControl("", Validators.required),
        Campo: new FormControl("", Validators.required),
        Honeypot: new FormControl("")
    });
  }
 */

  enviar(){

   /* if(this.inputs.valid && this.inputs.get("Honeypot").value == ""){
      this.inputs.disable();

      var formData: any = new FormData();
      formData.apped
    } */

    if(this.form.valid){

      this.form.disable();

      var formData: any = new FormData();
      formData.append("email", this.form.get("email").value);
      formData.append("mensaje", this.form.get("mensaje").value);

      /* this.http.post("https://script.google.com/macros/s/AKfycbzoTqbsA5YaOcu6-rtvf6me_0dCNfI5VsX2GtaB/exec ", formData).subscribe((response) => { */
      this.http.post("https://formspree.io/f/mgerpvve", formData).subscribe((response) => {
        if(response["result"] == "success"){
          this.mensajeRespuesta = "Gracias por enviar el mensaje";
        }else{

          this.mensajeRespuesta = "Error! ah ocurrido un error!!!"
        }

        this.form.enable();
        this.enviado = true;
        this.isLoading = false;
        console.log(response);

      },
        (error) => {
          this.mensajeRespuesta = "ah ocurrido un error... volver a cargar pagina";
          this.form.enable();
          this.enviado = true;
          this.isLoading = false;
          console.log(error);
        }
      )

    }
  }
  
  estadosidebar = "entra";
  ancho: number = 0;

  _toggleSidebar(){
    this.state = this.state === 'activo' ? 'inactivo' : 'activo';
    this._opened = !this._opened;

    this.esNormal = !this.esNormal;
    /* console.log(this._opened); */

    
    const botonz = this.btn_zindex.nativeElement;
    const opacidad = this.opacidad.nativeElement;

    if(!this._opened){
      this.render.setStyle(this.z_index.nativeElement, 'z-index', '500');
      this.hiddenForm = false; // NO se esconde form
      /* this.render.setStyle(botonz, 'z-index', '1000');
      this.render.setAttribute(opacidad, 'style', 'opacity: 1; background: #1b1b42;'); */
    
      this.estadosidebar = "sale";
    }else{
      this.render.setStyle(this.z_index.nativeElement, 'z-index', '-1');
      this.hiddenForm = true; // SI se esconde form
      /* this.render.setStyle(botonz, 'z-index', '1000');
      this.render.setAttribute(opacidad,'style', 'opacity: 0.4; background: #1b1b42'); */
      this.estadosidebar = "entra";
    }

  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  //aca recibiendo evento al presionar FLECHA DIRIGE HACIA HERO
  /*
  public scrollView(el: HTMLElement): void {
    el.scrollIntoView({behavior: "smooth"});
  } 
  */

  private _mostrarsobre(){
   /* this._mostrar = !this._mostrar; */
   this._mostrar = true;
  }


  onClick() {
    this.isHamburguer = !this.isHamburguer;
  }


  /* TAMAÑO DE PANTALLA ANCHO */
 
  @HostListener('window:resize', ['$event'])
   onResize(event) {
    this.ancho = event.target.innerWidth;
    if(this.ancho > 980){
        console.log("mayor a 850px");
        this.render.setStyle(this.z_index.nativeElement, 'z-index', '500');
        this.hiddenForm = false;
        this._opened = true;     
    }else{
      if(this._opened){ //abierto
        this.hiddenForm = true;
        this.render.setStyle(this.z_index.nativeElement, 'z-index', '-1');
      }else{ // cerrado
        this.hiddenForm = false;
        this.render.setStyle(this.z_index.nativeElement, 'z-index', '500');
      }
      
      /* this._opened = false; */
    }
   
  }

  ngOnDestroy(){
    
    /* this.isVideoPlayingServ._videostate.unsubscribe();  
    this.stateserv._state.unsubscribe(); 
    this._sunormoonserv._bodytoggle.unsubscribe(); 
    this.flechaServ._flechastate.unsubscribe(); */

    this.cd.detach();
    if(!this.cd['destroyed']) {
      this.cd.detectChanges();
  
    }
  }
}