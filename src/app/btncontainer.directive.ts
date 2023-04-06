import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtncontainer]'
})
export class BtncontainerDirective {

  constructor(private render: Renderer2, private ref: ElementRef) { }
  
  ngOnInit(){
    this.render.setStyle(this.ref.nativeElement, 'background-color', 'transparent');
  }
}
