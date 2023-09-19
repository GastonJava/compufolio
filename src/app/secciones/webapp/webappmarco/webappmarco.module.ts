import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'ng-sidebar';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { WebappmarcoComponent } from './componentes/webappmarco.component';
import { HttpClient } from '@angular/common/http';
import { WebappmarcoRoutingModule } from './webappmarco-routing';
import { ExperienciaModule } from './experiencia/experiencia.module';
import { ProjectModule } from './project/project.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { SkillsModule } from './skills/skills.module';
import { SobremiModule } from './sobremi/sobremi.module';


@NgModule({
  declarations: [WebappmarcoComponent],
  exports: [WebappmarcoComponent],
  imports: [
    /* SidebarModule, */
    SidebarModule.forRoot(),
    CommonModule,
    BrowserModule,
    WebappmarcoRoutingModule,
    ReactiveFormsModule,
    /* ExperienciaModule, */
    ProjectModule,
    ProyectosModule,
    SkillsModule,
    SobremiModule,
    
    
  ],
 
})
export class WebappmarcoModule {  }
