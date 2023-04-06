import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
 
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".txtfiltrar", // start the animation when ".box"
        toggleActions: "play none none none",
      
      },
    });

    tl.to(".rounded-circle", {
      x: 0,
      rotation: 360,
      duration: 3,
      ease: "none",
    });


    tl.to(".contenedorprincipal",{
      x: 5,
      rotation: 0,
      duration: 0.2,
    }, 0);

    tl.to(".contenedorprincipal",{
      x: 0,
      rotation: 0,
      duration: 0.2,
    }, 0.1)

    */

    
  }

}

