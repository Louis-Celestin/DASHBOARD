import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProblemesComponent } from './liste-problemes/liste-problemes.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Problèmes'
    },
    children: [
      {
        path: '',
        redirectTo: 'liste-problemes'
      },
      {
        path: 'liste-problemes',
        component:ListeProblemesComponent,
        data: {
          title: 'Listes des problèmes'
        }
      },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemesRoutingModule { }
