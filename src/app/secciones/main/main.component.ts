import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  /* lt1 = new TimelineMax(); */

  ngOnInit() {
    
  }

  /* scrollDx(){
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main__grid",
        toggleActions: "play none none none",
        markers: {
          indent: 100,
          fontSize: "35px",
          fontWeight: "bold",
          endColor: "salmon",
          startColor: "white",
        },
        scrub: false,
        end: "top 0px",
        start: "top 80%",
      
      },
    });

    tl.to('.container',{
      x: -400,
      duration: 5,
      
    });
  } */
 
  /*
  tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main__grid",
      toggleActions: "play none none none",
      markers: {
        indent: 100,
        fontSize: "35px",
        fontWeight: "bold",
        endColor: "salmon",
        startColor: "white",
      },
      scrub: false,
      end: "center 0px",
      start: "center 80%",
    
    },
  })

  .to('.coverbg',{
    x: 400,
    duration: 5,
    
  });

  */

}
