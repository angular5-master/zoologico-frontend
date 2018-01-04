import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';


@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})

export class AnimalDetailComponent implements OnInit{
  public animal: Animal;
  public url: string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
    
  ){
    this.url = GLOBAL.url;

    
  }

  ngOnInit(){
      console.log('anima-detail.component cargado!!');
      this.getAnimal();
  }

  getAnimal(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        response =>{
          if(!response.animal){
            this._router.navigate(['/home']);
          }else{
            this.animal = response.animal;
          }
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/home']);
        }

      )
    })
  }

}