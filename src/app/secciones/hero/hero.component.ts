import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   /* this.animarimg(); */
  }

  /*
  animarimg(){
    

    let maximg = new TimelineMax();

    maximg.to(".img__animar", 
    {
      duration: .3,
      y:(-10),
      repeat: -1,
      repeatDelay: 3,
     
    }).
    to('.img__animar',{
      duration: .3,
      y:(0),
      repeat: -1,
      repeatDelay: 3,
    });

    
  }

  */

}
