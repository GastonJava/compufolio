/* import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebappmarcoComponent } from './webappmarco/componentes/webappmarco.component';

const routes: Routes = [

  {
    path: 'experiencia',
    loadChildren: () => import('../webapp/webappmarco/experiencia/experiencia.module').then(m => m.ExperienciaModule)
  },
  {
    path: 'project',
    loadChildren: () => import('../webapp/webappmarco/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('../webapp/webappmarco/proyectos/proyectos.module').then(m => m.ProyectosModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('../webapp/webappmarco/skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: 'sobremi',
    loadChildren: () => import('../webapp/webappmarco/sobremi/sobremi.module').then(m => m.SobremiModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebappRoutingModule { } */