import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';
import { fadeIn, fadeOut, jackIn, scaleIn, scaleOut } from './animacion_carusel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [

     /*  transition('void => *', [
        useAnimation(fadeIn, {params: {time: '1300ms'}})
      ]),

      transition('* => void', [
        useAnimation(fadeOut, {params: {time: '1300ms'}})
      ]), */

      /* scale */
      transition("void => *", [useAnimation(scaleIn,  {params: { time: '1s' }})]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '1s' }})]),

      /* transition("* => void", [useAnimation(jackIn, {params: { time: '1s' }})]), */

    
    ])


  ] 
})
export class CarouselComponent {

  @Input() slides!: any;

  currentSlide = 0;
 /* intervalo = setInterval(this.onPreviousClick, 1500); */
 /* mi_intervalo = setInterval(() => { this.onPreviousClick() }, 5000); */

  mi_intervalo: any;

  constructor() { 
    /* this.mi_intervalo = setInterval(() => { this.onPreviousClick() }, 5000); */
  }

  ngOnInit(){




/*
   this.cargarimagenes(); 
*/





  }








/*
  cargarimagenes(){
    for(const slide of this.slides) {
        new Image().src = slide.src;
    }
  }
  */
 












  llamar() {
    this.mi_intervalo = setInterval(() => { this.onPreviousClick() }, 5000);
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    /* console.log("previous clicked, new current slide is: ", this.currentSlide); */
    /* console.log("se ejecuto metodo"); */
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    /* console.log("next clicked, new current slide is: ", this.currentSlide); */
  }

  /* REDIRIGIENDO A EXTERNO */
  link(index: number){

    console.log("click en el link: "+index);

    if(index == 0){
      window.open("https://1drv.ms/p/s!ApXSVzb2XpUWayIYRtA2phz9kyE?e=NowaRg", '_blank');
    }else if (index == 1){
      window.open("https://1drv.ms/p/s!ApXSVzb2XpUWayIYRtA2phz9kyE?e=NowaRg", '_blank');
    }else if(index == 2) {
      window.open("https://1drv.ms/p/s!ApXSVzb2XpUWayIYRtA2phz9kyE?e=NowaRg", '_blank');
    }
   /*  else if(index == 1) {
      window.open("#", '_blank');
    }else if(index == 2) {
      window.open("#", '_blank');
    } */
   

    
  }

  trackByFn(index: number, slide: any){
    console.log("index: "+index);
    return index;
  }

 

  ngOnDestroy() {
  /*   console.log("se destruyo intervalo"); */
    clearInterval(this.mi_intervalo);
  }
}