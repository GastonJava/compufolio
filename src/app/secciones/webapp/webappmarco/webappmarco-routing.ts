import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 /*  {
    path: '',
    loadChildren: () => import('../webappmarco/experiencia/experiencia.module').then(m => m.ExperienciaModule), data: {animation: 'experiencia'}
  },
  {
    path: 'proyectos',
    loadChildren: () => import('../webappmarco/project/project.module').then(m => m.ProjectModule), data: {animation: 'project'}
  },
  {
    path: '',
    loadChildren: () => import('../webappmarco/proyectos/proyectos.module').then(m => m.ProyectosModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('../webappmarco/skills/skills.module').then(m => m.SkillsModule), data: {animation: 'skills'}
  },
  {
    path: 'sobremi',
    loadChildren: () => import('../webappmarco/sobremi/sobremi.module').then(m => m.SobremiModule), data: {animation: 'sobremi'}
   }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

/* export const WebappmarcoRoutes = RouterModule.forChild(routes); */

export class WebappmarcoRoutingModule { }
