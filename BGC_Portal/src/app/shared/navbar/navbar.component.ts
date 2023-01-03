import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MemberDto } from 'src/app/api/models';
import { MemberService } from 'src/app/api/services';
import { HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authSrv: AuthService,
    private router: Router,
    private memberService: MemberService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  Login() {
    this.authSrv.loginWithRedirect();
    this.checkAndCreateUser();
  }

  checkAndCreateUser(): void {
    var member: MemberDto = {};
    member.memberId = 0;
    this.authSrv.user$.subscribe({
      next: (res) => {
        member.name = res?.name;
        member.email = res?.email;
        this.memberService
          .apiMemberCheckUserExistsPost$Json({ body: member })
          .subscribe();
      },
      error: (res) => {
        console.log(res);
      },
    });
  }

  OpenDialogLogout(): void {
    const dialogRef = this.dialog.open(NavbarDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  Logout(): void {
    this.authSrv.logout();
  }
  getIsAuth() {
    return this.authSrv.isAuthenticated$;
  }

  MyAccount(): void {
    this.checkAndCreateUser();
  }
  GoToHome(): void {
    this.router.navigate(['home']);
  }
  GoToCatalog(): void {
    this.router.navigate(['catalog']);
  }
  GoToCalendar(): void {
    this.router.navigate(['calendar']);
  }
  GoToGameSessions(): void {
    this.router.navigate(['game-sessions']);
  }
}

@Component({
  selector: 'navbar-dialog',
  templateUrl: '../dialog/navbar-dialog.html',
})
export class NavbarDialog {
  constructor(
    public dialogRef: MatDialogRef<NavbarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
