import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ngZoo';
  emailContacto: string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
    // console.log(localStorage.getItem('emailContacto'));
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
    
  }
  borrarEmail(){
    // Borra el item del Local Storage
    localStorage.removeItem('emailContacto');
    // Vaciar todos los elementos del Local Storage
    localStorage.clear();
    this.emailContacto = null
  }
}