import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteRoutingModule } from './carte-routing.module';
import { IdentificationComponent } from './identification/identification.component';
import { EvaluationLieuComponent } from './evaluation-lieu/evaluation-lieu.component';


@NgModule({
  declarations: [
    IdentificationComponent,
    EvaluationLieuComponent
  ],
  imports: [
    CommonModule,
    CarteRoutingModule
  ]
})
export class CarteModule { }
