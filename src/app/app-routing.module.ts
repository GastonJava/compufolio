import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HeroComponent } from "./secciones/hero/hero.component";
import { NuevoheroComponent } from "./secciones/nuevohero/nuevohero.component";


const routes: Routes = [

    { path: '', redirectTo: 'nuevohero', pathMatch: 'full' },

    { path: 'nuevohero', 
       component: NuevoheroComponent
    },
    
    /*{ path: '', component: NuevoheroComponent},*/
    /*
   {
      path: '',
      data: {state: 'sobremi'},
      component: HeroComponent
   }, 
   */

    {
        path: 'under',
        data: { state: 'under' },
        loadChildren: () => import('../app/secciones/webapp/webappmarco/experiencia/experiencia.module').then(m => m.ExperienciaModule)
    },

    {
        path: 'project',
        data: { state: 'proyecto' },
        loadChildren: () => import('../app/secciones/webapp/webappmarco/project/project.module').then(m => m.ProjectModule)
    },

    /* {
        path: 'proyectos',
        loadChildren: () => import('../app/secciones/webapp/webappmarco/proyectos/proyectos.module').then(m => m.ProyectosModule)
    }, */

    {
        path: 'skills',
        data: { state: 'skill' },
        loadChildren: () => import('../app/secciones/webapp/webappmarco/skills/skills.module').then(m => m.SkillsModule)
    },

    {
        path: 'sobremi',
        data: { state: 'sobremi' },
        loadChildren: () => import('../app/secciones/webapp/webappmarco/sobremi/sobremi.module').then(m => m.SobremiModule)
    },

];

@NgModule({

    declarations: [

    ],
    imports: [
        RouterModule.forRoot(routes, {
    /* preloadingStrategy: PreloadAllModules, */
    anchorScrolling: 'disabled',
    relativeLinkResolution: 'legacy'
})
    ],

    exports: [RouterModule]
})

export class AppRoutingModule { }