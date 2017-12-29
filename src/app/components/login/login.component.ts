import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService]
})

export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public identity;
  public token;
  public status: any;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService
  ){
      this.title = 'Identificacion';
      this.user = new User('', '', '', '', '', 'ROLE_USER','');
  }

  ngOnInit(){
      console.log('login.component cargado!!');
    // Mostrar Identity y Token guardados en el localStorage
    // console.log(localStorage.getItem('identity'));
    // console.log(localStorage.getItem('token'));

    // Lo volvemos un servicio
    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  onSubmit(){
      // Loguear al usuario y conseguir el Objeto
      this._userService.signup(this.user).subscribe(
          response => {
            this.identity = response.user;

            if(!this.identity || !this.identity._id){
                alert('El usuario no se ha logueado correctamente');
            }else{
                this.identity.password = '';
                // Guardar en el localStorage el Identity
                localStorage.setItem('identity', JSON.stringify(this.identity));

                // Conseguir el token
                this._userService.signup(this.user, true).subscribe(
                    response => {
                      this.token = response.token;
          
                      if(this.token.length <= 0){
                        alert('El token no se ha generado');
                      }else{
                        // Guardar en el localStorage el Token
                        localStorage.setItem('token', this.token);
                        this.status = 'success'
                      }
                    },
                    error => {
                      console.log(<any>error);
                    }
                );
            }
          },
          error => {
            var errorMessage = <any>error;

            if(errorMessage != null){
                var body = JSON.parse(error._body);
                this.status = 'error';
            }
          }
      );
  }

}