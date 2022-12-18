import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response = "";

  constructor(private authSrv : AuthService, private http : HttpClient) {}

  ngOnInit(): void {
  }

  getToken(){
    this.response = 'wait for response...';
    this.authSrv.getAccessTokenSilently().subscribe({
      next: (t) => {
       const helper = new JwtHelperService();
       const decodeToken = helper.decodeToken(t);
       this.response = 'perm = ' + decodeToken["permissions"];
      }
    })
  }

  callPrivate(scope : string) {
    this.response = "wait for response ...";
    this.authSrv.getAccessTokenSilently().subscribe({
      next : (token) => {
        this.http.get<String>(
          'http://localhost:7139/api/member/login' + scope,
          { headers: new HttpHeaders({ "Authorization": "Bearer " + token }) }
        ).subscribe({
          next : (r) => this.response = JSON.stringify(r),
          error : (e) => this.response = 'API call error ' + JSON.stringify(e)
        });
      }
    })
  }

  login() {
    this.authSrv.loginWithRedirect();
  }

  logout() {
    this.authSrv.logout();
  }
  
  getIsAuth() {
    return this.authSrv.isAuthenticated$;
  }

  getUser() {
    return this.authSrv.user$;
  }

}