import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoheroComponent } from './nuevohero.component';
import { NuevoheroRoutes } from './nuevohero.routing';


@NgModule({
  imports: [
    CommonModule,
    NuevoheroRoutes,
    
  ],
declarations: [NuevoheroComponent ],
exports: [NuevoheroComponent]
})
export class NuevoheroModule {}
