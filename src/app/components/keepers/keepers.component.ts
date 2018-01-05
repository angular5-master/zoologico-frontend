import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { NgForOf } from '@angular/common/src/directives/ng_for_of';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  providers: [UserService],
  animations: [fadeIn]
})

export class KeepersComponent implements OnInit {
  public title:string;
  public keepers: User[];
  public url:string;

  constructor(
    private _userService: UserService
  ){
    this.title = 'Cuidadores';
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    console.log('keepers.component cargado!!');
    this.getKeepers();
  }

  getKeepers(){
    this._userService.getKeepers().subscribe(
      response => {
        if(!response.users){
          
        }else{
          this.keepers = response.users;
        }

      },
      error => {
        console.log(<any>error);
      }
    )
  }
}