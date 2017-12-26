import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
        <div *ngIf="emailContacto">
        <h4>{{ title }}</h4>
            <strong>E-mail </strong>{{ emailContacto }} 
            <button (click)="borrarEmail()">Eliminar email de contacto</button>
        </div> 
  `
})

export class MostrarEmailComponent implements DoCheck, OnInit{
  title = 'Mostrar Email';
  emailContacto: string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
    
  }
  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null
  }
}