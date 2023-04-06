import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextobtn]'
})
export class TextobtnDirective {

  constructor(private render: Renderer2, private ref: ElementRef) { }
  
  ngOnInit(){
    this.render.setStyle(this.ref.nativeElement, 'color', 'blue');
  }
}
