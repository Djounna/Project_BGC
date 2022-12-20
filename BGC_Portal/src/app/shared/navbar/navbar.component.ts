import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

ngOnInit(): void {
  }
  
Login(): void {
  this.router.navigate(['login']);

}
MyAccount(): void{
  this.router.navigate([]);
}

GoToHome(): void{
  this.router.navigate(['home']);
}
GoToCatalog(): void {
  this.router.navigate(['catalog']);
}
GoToCalendar(): void {
  this.router.navigate(['calendar']);
}
}
