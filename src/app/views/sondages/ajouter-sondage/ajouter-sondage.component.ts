import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sondage, Option } from '../sondage.model';
import { SondageService } from '../sondage.service';
import{ FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'app-ajouter-sondage',
  templateUrl: './ajouter-sondage.component.html',
  styleUrls: ['./ajouter-sondage.component.scss']
})
export class AjoutSondageComponent implements OnInit {

  optionForm!: FormGroup;
  sondage: Sondage = new Sondage();
  option: Option = new Option();

  constructor(private sondageService : SondageService, private router : Router, private fb:FormBuilder) {

    this.optionForm=this.fb.group({
      options : this.fb.array([])
    });
   }

  // Debut FormArray

    options():FormArray {
      return this.optionForm.get("options") as FormArray
    }
    newOption(): FormGroup {
      return this.fb.group({
        libelle:''
      })
      }
      addOption(){
        this.options().push(this.newOption());
      }
      removeOption(i: number){
        this.options().removeAt(i);
      }

      saveOption(){
          this.sondageService.createOption(this.option).subscribe(data => {
            console.log(data);
        this.goToSondageListe();
          return true;
        },error=>console.log(error));
        return false;
      }

  // Fin FormArray

      saveSondage(){
        this.sondageService.createSondage(this.sondage).subscribe(data=>{
          console.log(data);
        this.goToSondageListe();
          return true;
        },error=>console.log(error));
        return false;
  }

  goToSondageListe(){
    this.router.navigateByUrl('/sondages/liste-sondages');
  }

  onSubmit(){
    if (this.saveSondage() && this.saveOption()){
      this.goToSondageListe();
    }


  }
  ngOnInit(): void {
  }

}
