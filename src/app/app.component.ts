import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})

export class AppComponent implements OnInit, DoCheck{
  public title:string;
  public identity;
  public url: string;

  constructor(
    private _userSrvice: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'NGZOO';
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    this.identity = this._userSrvice.getIdentity();
  }

  ngDoCheck(){
    this.identity = this._userSrvice.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}