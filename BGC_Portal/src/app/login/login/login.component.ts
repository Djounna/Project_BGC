import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
response="";

constructor(private authSrv : AuthService, private http : HttpClient) {}

  ngOnInit(): void {
  }


  callPrivate(scope : string) {
    this.response = "wait for response ...";
    this.authSrv.getAccessTokenSilently().subscribe({
      next : (token) => {
        this.http.get<String>(
          'http://localhost:7139/api/values/private' + scope,
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
