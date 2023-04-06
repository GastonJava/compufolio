import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  /*
  scroll(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth'});
  }

  toHero(){
    document.getElementById('hero').scrollIntoView({behavior: 'smooth'});
  }

  toCard(){
    document.getElementById('card').scrollIntoView({behavior: 'smooth'});
  }

  toWebApp(){
    document.getElementById('webapp').scrollIntoView({behavior: 'smooth'});
  }
 */


}
