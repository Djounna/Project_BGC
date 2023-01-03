import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { GameSessionDto } from 'src/app/api/models';
import { GameSessionService, MemberService } from 'src/app/api/services';

@Component({
  selector: 'app-member-sessions',
  templateUrl: './member-sessions.component.html',
  styleUrls: ['./member-sessions.component.css'],
})
export class MemberSessionsComponent implements OnInit {
  public MemberGameSessions: GameSessionDto[] = [];
  public memberId?: number = 0;
  public memberName?: string = '';
  dataSource: any;
  sub!: Subscription;
  subSessions!: Subscription;

  displayedColumns: string[] = ['Name', 'Description'];

  constructor(
    private memberService: MemberService,
    private gameSessionService: GameSessionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sub = this.authService.user$.subscribe({
      next: (res) => {
        console.log(res);
        this.memberName = res?.name;
        if (this.memberName !== null) {
          this.subSessions = this.gameSessionService
            .apiGameSessionMemberNameGet$Json({ memberName: this.memberName })
            .subscribe({
              next: (res) => {
                this.MemberGameSessions = res;
                this.dataSource = this.MemberGameSessions;
              },
              error: (err) => console.log(err),
            });
        }
      },
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.subSessions.unsubscribe();
  }
}
