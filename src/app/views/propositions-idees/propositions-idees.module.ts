import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropositionsIdeesRoutingModule } from './propositions-idees-routing.module';
import { ListeIdeesComponent } from './liste-idees/liste-idees.component';
import { ListeIdeesSignaleesComponent } from './liste-idees-signalees/liste-idees-signalees.component';


@NgModule({
  declarations: [
    ListeIdeesComponent,
    ListeIdeesSignaleesComponent
  ],
  imports: [
    CommonModule,
    PropositionsIdeesRoutingModule
  ]
})
export class PropositionsIdeesModule { }
