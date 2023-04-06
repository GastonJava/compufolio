import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from "@angular/core";


@Directive({
    selector: '[Mouseoverdom]'
})

export class mousovercarouselDirective {
    constructor (public renderer: Renderer2, public elem: ElementRef) {}

    /* @Input('hover-class') hoverClass:any; */

    @ViewChild('parrafo') wrapper: ElementRef;

    @HostListener('mouseover') onMouseOver() {
        /* console.log("hola soy la directiva!!!");
        window.alert('hover'); */

        this.ApareceFondo();
    }

    ngAfterViewInit(): void {
        // nodo DOM
     console.log(this.wrapper.nativeElement);
   }

    ApareceFondo() {
        this.renderer.setStyle(this.elem.nativeElement, 'background', 'red');
        this.renderer.setStyle(this.wrapper.nativeElement, 'background', 'green');
    }



}