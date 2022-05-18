import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/utilisateurs-model';
import { ServiceUtilisateursService } from 'src/app/services/session-user/service-utilisateurs.service';
import { Router } from '@angular/router';
import { Communes } from 'src/app/models/communes';
import { TypeUtilisateur } from '../../../models/agents';

@Component({
  selector: 'app-ajouter-utilisateurs',
  templateUrl: './ajouter-utilisateurs.component.html',
  styleUrls: ['./ajouter-utilisateurs.component.scss'],
})
export class AjouterUtilisateursComponent implements OnInit {
  //Instance de notre models user
  agent: User = new User();
  //Instance de notre models communes
  street!: Communes[];
  //Instance de notre models
  userType!: TypeUtilisateur[];
  //Alert message

  alert: boolean = false;

  constructor(
    private userAgent: ServiceUtilisateursService,
    private userStreet: ServiceUtilisateursService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStreetList();
    this.getAgentList();
  }

  saveUser() {
    this.userAgent.createUser(this.agent).subscribe(
      (data) => {
        console.log(data);
        this.alert = true;
        this.goToUserList();
      },
      (error) => console.log(error)
    );
  }
  //function de fermerture du boutton
  closeAlert() {
    this.alert = true;
  }
  //function de retour sur la liste
  goToUserList() {
    //this.router.navigate(['/utilisateurs/liste-utilisateurs']);
  }

  //Envoie du formulaires
  onSubmit() {
    console.log(this.agent);
    this.alert = true;
    this.saveUser();
  }

  //Methode pour le listing des communes
  private getStreetList() {
    this.userStreet.getStreetList().subscribe((data) => {
      this.street = data;
    });
  }

  //methode pour le lsiting des type d'utilisateurs

  private getAgentList() {
    this.userStreet.getAgentList().subscribe((data) => {
      this.userType = data;
    });
  }

  // register = this.fb.group({
  //   name: ['', Validators.required],
  //   prenom: ['', Validators.required],
  //   phone: ['', Validators.required],
  //   email: ['', Validators.required],
  //   password: ['', Validators.required],
  //   lieu_naissance: ['', Validators.required],
  //   date_naissance: ['', Validators.required],
  //   sexe: ['', Validators.required],
  //   IdCommune: ['', Validators.required],
  //   IdTypeUtilisateur: ['', Validators.required],
  // });
}
