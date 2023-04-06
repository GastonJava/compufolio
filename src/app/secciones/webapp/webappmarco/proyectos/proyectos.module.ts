import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { HeladeriaformModule } from './formulario/heladeriaform.module';
import { ProyectosComponent } from './componentes/proyectos.component';

@NgModule({
  declarations: [ProyectosComponent],
  imports: [
   /*  CommonModule, */
    ProyectosRoutingModule,
    HeladeriaformModule

  ]
})
export class ProyectosModule { }
