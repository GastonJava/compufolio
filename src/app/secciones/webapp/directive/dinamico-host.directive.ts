import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDinamicoHost]'
})
export class DinamicoHostDirective {

  constructor(public ViewContentRef: ViewContainerRef) { }

}
