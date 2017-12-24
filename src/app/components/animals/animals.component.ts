import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html'
})

export class AnimalsComponent implements OnInit {
  title = 'Animales';

  ngOnInit(){
    console.log('animals.component cargado!!')
  }
}