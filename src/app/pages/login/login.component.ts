import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserDto} from "../../services/models/user-dto";
import {AuthenticationService} from "../../services/services/authentication.service";
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authRequest : AuthenticationRequest = {};
  errorMessages : Array<string> = [];

  constructor(

    private router : Router, //on vient d'injecter le service router comme dans spring !
    private authService : AuthenticationService

  )

  {
  }

  ngOnInit(): void {
  }

  protected readonly Component = Component;

  async register() {

    await this.router.navigate(['register']);
    //await pour que on attend jusqua ce que on changela route pour exécuter la suite de code !
    // la suite de code
  }

  login() {
    this.errorMessages = [];
    this.authService.authenticate({
      body : this.authRequest
    })
      .subscribe({
        next : async (data) => {
           //this.router.navigate(['user/dashboard']);
          localStorage.setItem('token', data.token as string);

          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(data.token);
          if (decodedToken.authorities[0].authority === 'ROLE_ADMIN') {
            await this.router.navigate(['admin/dashboard']);
          } else {
            await this.router.navigate(['user/dashboard']);
          }

        },

        error : (err) => {
          console.log(err);
          this.errorMessages.push(err.error.errorMsg);
        }

      });
  }


}
