import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { GameSessionDto, MemberDto } from 'src/app/api/models';
import { GameSessionService, MemberService } from 'src/app/api/services';

@Component({
  selector: 'app-organizer-sessions',
  templateUrl: './organizer-sessions.component.html',
  styleUrls: ['./organizer-sessions.component.css'],
})
export class OrganizerSessionsComponent implements OnInit {
  allGameSessions: GameSessionDto[] = [];
  public member: MemberDto = {};
  public organizerGameSessions: GameSessionDto[] = [];
  memberEmail: string = '';
  memberName: string = '';
  dataSource: any;
  subEmail!: Subscription;
  subName!: Subscription;
  subMember!: Subscription;
  subSessions!: Subscription;

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
    debugger;
    this.subName = this.authService.user$.subscribe({
      next: (res) => {
        this.memberName = res?.name || '';
        console.log(this.memberName);
        this.subMember = this.memberService
          .apiMemberNameGet$Json({ name: this.memberName })
          .subscribe({
            next: (res) => {
              this.member = res;
              this.subSessions = this.gameSessionService
                .apiGameSessionGet$Json()
                .subscribe({
                  next: (res) => {
                    this.allGameSessions = res;
                    this.organizerGameSessions = this.allGameSessions.filter(
                      (x) => x.organizerId === this.member.memberId
                    );
                    this.dataSource = this.organizerGameSessions;
                  },
                  error: (err) => console.log(err),
                });
            },
            error: (err) => console.log(err),
          });
      },
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy() {
    this.subMember.unsubscribe();
    this.subSessions.unsubscribe();
    if (this.subName) {
      this.subName.unsubscribe();
    }
  }
}
