import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienciaComponent } from './componentes/experiencia.component';

const routes: Routes = [
  {
    path: '', component: ExperienciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienciaRoutingModule { }
