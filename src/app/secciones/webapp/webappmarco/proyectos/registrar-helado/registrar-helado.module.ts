import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarHeladoComponent } from './componentes/registrar-helado.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/gsap.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule
    
  ],
  declarations: [
    RegistrarHeladoComponent,
  
  ],
  

 
})
export class RegistrarHeladoModule { }
