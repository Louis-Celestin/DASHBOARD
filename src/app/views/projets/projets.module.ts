import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { ModifierProjetComponent } from './modifier-projet/modifier-projet.component';


@NgModule({
  declarations: [
    AjoutProjetComponent,
    ListeProjetsComponent,
    ModifierProjetComponent
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
