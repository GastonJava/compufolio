import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoheroComponent } from './nuevohero.component';
import { NuevoheroRoutes } from './nuevohero.routing';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  imports: [
    CommonModule,
    NuevoheroRoutes,
    
  ],
declarations: [/*NuevoheroComponent */]
})
export class NuevoheroModule {}
