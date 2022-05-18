import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projets'
    },
    children: [
      {
        path: '',
        redirectTo: 'ajout-projet'
      },
      {
        path: 'ajout-projet',
        component:AjoutProjetComponent,
        data: {
          title: 'Ajouter un projet'
        }
      },
      {
        path: 'liste-projets',
        component: ListeProjetsComponent,
        data: {
          title: 'Liste des projets'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
