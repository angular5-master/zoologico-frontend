import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    providers: [UserService]
})

export class UserEditComponent implements OnInit{
    public title: String;
    public user: User;
    public identity;
    public token;
    
    constructor(
        private _userService: UserService
    ){
        this.title = 'Actualizar mis Datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
    }
    ngOnInit(){
       console.log('user-edit Cargado'); 
    }
}