import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
/* import { CaruselComponent } from "./carusel/carusel.component"; */
import { CaruselimgService } from "./carusel/caruselimg.service";
import { CaruselSharedService } from "./carusel/caruselShared.service";

/*
@Component({
  selector: "app-main-nuevo",
  templateUrl: "./main-nuevo.component.html",
  styleUrls: ["./main-nuevo.component.scss"],
})

export class MainNuevoComponent implements OnInit { 
   constructor(public _config: NgbCarouselConfig,
    public srv: CaruselimgService) {
    super(_config, srv);
  } 

 constructor(private srvcarusel: CaruselSharedService) {} 


  ngOnInit() {
    this.scrollanimation();
  
  }
  
  
  iniciarSubscription(){    
    this.srvcarusel.iniciarSubs();    
  }    
 
  detenerSubs(){
    this.srvcarusel.cancelarSubs();
  }
 

  


  scrollanimation(){ 

   gsap.to(".box1", {
    scrollTrigger: {
    trigger: ".linea-aca",
    toggleActions: "play complete reverse reset",
    start: "top 20%",
    end: "top 80%",
    markers:{
      fontSize: "20px",
      fontWeight: "bold",
      startColor: "white",
      endColor: "red",
    },

  },

  scaleX: 0, 
  duration: 10, 
  repeat: -1, 
  transformOrigin: "left center", 
  ease: "none"
  }); 

  gsap.to('.box1', {
    scrollTrigger: {
        trigger: ".box2",
        start: "top 300px",
        end:"top center",   
        markers: {
            fontSize: "20px",
            fontWeight: "bold",
            startColor: "blue",
            endColor: "red",
        },
        scrub:  false,
        toggleActions: "none none none none",
      },
     scaleX: 0.2,
     transformOrigin: "left center",
     duration: 10,
   });
   
  } 

 
} */
