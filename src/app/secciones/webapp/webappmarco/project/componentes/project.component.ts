import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackgroundToggleService } from 'src/app/secciones/nuevohero/servicios/backgroundToggle.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class ProjectComponent implements OnInit {

  /** ASYNC PIPES VARIABLES */
  isVideo$!: Observable<Boolean>;

  isVideo!: Boolean;

  slidesEmp!: [];
  constructor(
    private renderer: Renderer2,
    private elem: ElementRef,
    private _isToggleserv: BackgroundToggleService
  ) { 
  }

  ngOnInit() {

    this.isVideo$ = this._isToggleserv.state$.pipe(map(state => state.bgToggle));

    /*
    this._isToggleserv.state$.subscribe((togglevideo) => {
      this.isVideo = togglevideo.bgToggle;
    });
    */
  }

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('parrafo') parrafo!: ElementRef;
  @ViewChild('over') over!: ElementRef;

  /*
  @HostListener('mouseover') onMouseOver() {
     
  } */


  public slides = [
    {src: 'assets/proyecto/cineyapp.png'},
    {src: 'assets/proyecto/cineyapp_principal.png'},
    {src: 'assets/proyecto/cineyapp_peliculadetalle.png'},
  ]

  identify(index: number, slides: any){
    this.slidesEmp = slides;
    return this.slidesEmp;
  }

  ngOnDestroy(){
    /* this._isToggleserv._state.unsubscribe(); */ /** si me UNSUBSCRIBO no funciona animacion de webapp */
  }
  
}