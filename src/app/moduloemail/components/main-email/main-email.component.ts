import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
     <div id="email" class="panel panel-default">
        <h2> {{ title }} </h2>
        <hr>
        <guardar-email></guardar-email>
        <mostrar-email></mostrar-email>
        
      <div>
  `
})

export class MainEmailComponent implements OnInit{
  title = 'Modulo de email';

  ngOnInit(){
      console.log("Componente principal cargado");
  }

}