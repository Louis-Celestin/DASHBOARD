import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemesRoutingModule } from './problemes-routing.module';
import { ListeProblemesComponent } from './liste-problemes/liste-problemes.component';
import { DataTablesModule } from 'angular-datatables';
import { DetailProblemeComponent } from './detail-probleme/detail-probleme.component';


@NgModule({
  declarations: [
    ListeProblemesComponent,
    DetailProblemeComponent
  ],
  imports: [
    CommonModule,
    ProblemesRoutingModule,
    DataTablesModule
  ]
})
export class ProblemesModule { }
