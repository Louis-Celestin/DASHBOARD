import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataList } from 'src/app/models/dataList';
import { ServiceUtilisateursService } from 'src/app/services/session-user/service-utilisateurs.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.scss'],
})
export class ListeUtilisateursComponent implements OnInit {
  //Déclarons la vraiable pour le modele creer

  userList!: DataList[];
  constructor(
    private userService: ServiceUtilisateursService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  //CREONS LA FUNCTION
  private getUser() {
    this.userService.getUserList(2).subscribe((data) => {
      this.userList = data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      console.log(data);
    });
  }
}
