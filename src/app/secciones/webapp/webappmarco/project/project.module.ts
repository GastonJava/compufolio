import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { CarouselComponent } from '../../carousel/carousel.component';
import { mousovercarouselDirective } from '../../directive/mousovercarousel.directive';
import { ProjectComponent } from './componentes/project.component';

@NgModule({
  declarations: [
    CarouselComponent,
    mousovercarouselDirective,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule { }
