import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobremiRoutingModule } from './sobremi.routing';
import { SobremiComponent } from './componentes/sobremi.component';

@NgModule({
  declarations: [
    SobremiComponent
  
  ],
  imports: [
    CommonModule,
    SobremiRoutingModule,
  ],

  
})
export class SobremiModule {} 

/* export class SobremiModule { static getMyComponent() { return SobremiComponent } } */