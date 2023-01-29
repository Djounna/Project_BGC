import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { GameSessionDto } from 'src/app/api/models';
import { GameSessionService } from 'src/app/api/services';

@Component({
  selector: 'app-organizer-sessions',
  templateUrl: './organizer-sessions.component.html',
  styleUrls: ['./organizer-sessions.component.css'],
})
export class OrganizerSessionsComponent implements OnInit {
  public OrganizerGameSessions: GameSessionDto[] = [];
  public memberId?: number = 0;
  public memberName?: string = '';
  dataSource: any;
  sub!: Subscription;
  subSessions!: Subscription;

  displayedColumns: string[] = [
    'Name',
    'Description',
    'MinNumberPlayer',
    'MaxNumberPlayer',
  ];

  constructor(
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
                this.OrganizerGameSessions = res;
                this.dataSource = this.OrganizerGameSessions;
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
