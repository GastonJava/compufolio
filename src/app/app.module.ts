import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BtncontainerDirective } from './btncontainer.directive';
import { TextobtnDirective } from './textobtn.directive';
import { NavbarComponent } from './secciones/navbar/navbar.component';
import { HeroComponent } from './secciones/hero/hero.component';
import { MainComponent } from './secciones/main/main.component';
import { WorkComponent } from './secciones/work/work.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarModule } from 'ng-sidebar';

import { NuevoheroComponent } from './secciones/nuevohero/nuevohero.component';

import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DinamicoHostDirective } from './secciones/webapp/directive/dinamico-host.directive';
import { MouseoverdomDirective } from './secciones/webapp/directive/mouseoverdom.directive';
/* import { WebappModule } from './secciones/webapp/webapp.module'; */
import { WebappmarcoComponent } from './secciones/webapp/webappmarco/componentes/webappmarco.component';
import { WebappdirectivaDirective } from './secciones/webapp/webappmarco/directivas/webappdirectiva.directive';
import { WebappmarcoModule } from './secciones/webapp/webappmarco/webappmarco.module';
import { AppRoutingModule } from './app-routing.module';
import { TestingheroComponent } from './secciones/testinghero/testinghero.component';
import { NuevoheroModule } from './secciones/nuevohero/nuevohero.module';
import { NgParticlesModule } from 'ng-particles';
import { BotonswitchModule } from './secciones/botonswitch/botonswitch.module';
//import { ParticlesModule } from 'angular-particle';



@NgModule({
  declarations: [		
    AppComponent,
    BtncontainerDirective,
    TextobtnDirective,
    NavbarComponent,
    HeroComponent,
    NuevoheroComponent, 
    MainComponent,
    WorkComponent,
    DinamicoHostDirective,
    MouseoverdomDirective,
    WebappdirectivaDirective,
    TestingheroComponent
   ],

  imports: [
    
    BrowserAnimationsModule,
    
   /*  WebappModule, */
    
    HttpClientModule,
    AppRoutingModule, 

  
    /* BrowserModule, */
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    
    /* NoopAnimationsModule, */
    NgParticlesModule,
    WebappmarcoModule,

    BotonswitchModule,
    /* MainNuevoModule, */
    /* WebappModule, */
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }