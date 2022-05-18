import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationsRoutingModule } from './informations-routing.module';
import { AjouterInformationComponent } from './ajouter-information/ajouter-information.component';
import { ListeInformationsComponent } from './liste-informations/liste-informations.component';


@NgModule({
  declarations: [
    AjouterInformationComponent,
    ListeInformationsComponent
  ],
  imports: [
    CommonModule,
    InformationsRoutingModule
  ]
})
export class InformationsModule { }
