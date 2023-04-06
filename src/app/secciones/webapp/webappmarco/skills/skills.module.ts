import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills.routing';
import { SkillsComponent } from './componentes/skills.component';

@NgModule({
  declarations: [SkillsComponent],

  imports: [
    CommonModule,
    SkillsRoutingModule
  ]

})

export class SkillsModule { }