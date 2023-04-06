import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appWebappdirectiva]'
})
export class WebappdirectivaDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    /* this.renderer.addClass(this.elementRef.nativeElement, '') */
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'black');
  }

}
