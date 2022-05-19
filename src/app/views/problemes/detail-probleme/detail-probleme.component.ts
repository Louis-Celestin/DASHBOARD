import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Probleme } from '../probleme.model';
import { ProblemeService } from '../probleme.service';

@Component({
  selector: 'app-detail-probleme',
  templateUrl: './detail-probleme.component.html',
  styleUrls: ['./detail-probleme.component.scss']
})
export class DetailProblemeComponent implements OnInit {

id! : number;
probleme! : Probleme;

  constructor(private route : ActivatedRoute,private ProblemeService : ProblemeService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.probleme = new Probleme();
    this.ProblemeService.getProblemeById(this.id).subscribe(data =>{
        this.probleme = data;
        console.log(this.probleme);

    });

  }
}
