import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  public title: string;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router
  ){
      this.title = 'Identificacion';
  }

  ngOnInit(){
      console.log('login.component cargado!!');
  }

}