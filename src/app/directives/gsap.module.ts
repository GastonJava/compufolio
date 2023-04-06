import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInAnimationDirective } from './gsap/fade-in-animation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FadeInAnimationDirective],
  exports: [FadeInAnimationDirective]
})
export class DirectivesModule { }
