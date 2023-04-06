import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseoverdom]'
})
export class MouseoverdomDirective implements OnInit {

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    this.render.setStyle(this.elRef.nativeElement, 'background','white');
  }

  @HostListener('mouseover')
  onMouseOver(){
    this.render.setStyle(this.elRef.nativeElement, 'value', 'ingresar un valor');
    this.render.setAttribute(this.elRef.nativeElement, 'value', 'ingresar un valor');

    console.log("mouse hover mediante HOSTLISTENER ->: ");
  }


}
