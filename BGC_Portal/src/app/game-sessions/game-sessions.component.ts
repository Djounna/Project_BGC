import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { GameSessionDto, MemberDto } from '../api/models';
import { GameSessionService, MemberService } from '../api/services';

@Component({
  selector: 'app-game-sessions',
  templateUrl: './game-sessions.component.html',
  styleUrls: ['./game-sessions.component.css'],
})
export class GameSessionsComponent implements OnInit, OnDestroy {
  allGameSessions: GameSessionDto[] = [];
  memberEmail: string = '';
  member: MemberDto = {};
  subSessions!: Subscription;
  subEmail!: Subscription;
  subMember!: Subscription;

  dataSource: any;
  displayedColumns: string[] = [
    'Name',
    'Description',
    'MinNumberPlayer',
    'MaxNumberPlayer',
    'Schedule',
  ];
  constructor(
    private gameSessionService: GameSessionService,
    private memberService: MemberService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // debugger;
    // this.subSessions = this.gameSessionService
    //   .apiGameSessionGet$Json()
    //   .subscribe({
    //     next: (res) => {
    //       this.allGameSessions = res;
    //       this.dataSource = this.allGameSessions;
    //     },
    //     error: (err) => console.log(err),
    //   });
    // this.subEmail = this.authService.user$.subscribe({
    //   next: (res) => {
    //     this.memberEmail = res?.email || '';
    //     this.subMember = this.memberService
    //       .apiMemberEmailGet$Json({ email: this.memberEmail })
    //       .subscribe({
    //         next: (res) => {
    //           this.member = res;
    //         },
    //         error: (err) => console.log(err),
    //       });
    //   },
    // });
  }

  ngOnDestroy(): void {
    // this.subSessions.unsubscribe();
    // this.subEmail.unsubscribe();
    // this.subMember.unsubscribe();
  }
}
