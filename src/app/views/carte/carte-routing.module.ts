import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationLieuComponent } from './evaluation-lieu/evaluation-lieu.component';
import { IdentificationComponent } from './identification/identification.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Collectes'
    },
    children: [
      {
        path: '',
        redirectTo: 'evaluation-lieu'
      },
      {
        path: 'evaluation-lieu',
        component:EvaluationLieuComponent,
        data: {
          title: 'Evaluons le lieu'
        }
      },

      {
        path: 'identification',
        component:IdentificationComponent,
        data: {
          title: 'Identifions le lieu'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteRoutingModule { }
