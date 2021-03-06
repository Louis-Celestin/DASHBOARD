import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterUtilisateursComponent } from './ajouter-utilisateurs/ajouter-utilisateurs.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Utilisateurs',
    },
    children: [
      {
        path: '',
        redirectTo: 'ajouter-utilisateurs',
      },
      {
        path: 'ajouter-utilisateurs',
        component: AjouterUtilisateursComponent,
        data: {
          title: 'Mes sondages',
        },
      },
      {
        path: 'liste-utilisateurs',
        component: ListeUtilisateursComponent,
        data: {
          title: 'Liste des sondages',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilisateursRoutingModule {}
