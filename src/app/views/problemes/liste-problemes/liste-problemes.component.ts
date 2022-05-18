import { Component, OnInit } from '@angular/core';
import { Probleme } from '../probleme.model';
import { ProblemeService } from '../probleme.service';


@Component({
  selector: 'app-liste-problemes',
  templateUrl: './liste-problemes.component.html',
  styleUrls: ['./liste-problemes.component.scss']
})
export class ListeProblemesComponent implements OnInit {


  problemes! : Probleme[];
  dtOptions: DataTables.Settings = {};
  constructor(private ProblemeService : ProblemeService) { }

  ngOnInit(): void {
    this.getProblemes();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  private getProblemes(){
    this.ProblemeService.getProblemes().subscribe(data=>{
      this.problemes = data;
      console.log(this.problemes);
    });
  }
}
