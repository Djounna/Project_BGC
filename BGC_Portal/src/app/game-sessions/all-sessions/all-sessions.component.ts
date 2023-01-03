import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameSessionDto } from 'src/app/api/models';
import { GameSessionService } from 'src/app/api/services';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-sessions',
  templateUrl: './all-sessions.component.html',
  styleUrls: ['./all-sessions.component.css'],
})
export class AllSessionsComponent implements OnInit {
  public AllGameSessions: GameSessionDto[] = [];
  subSessions!: Subscription;
  dataSource: any;
  displayedColumns: string[] = [
    'Name',
    'Description',
    'MinNumberPlayer',
    'MaxNumberPlayer',
  ];

  constructor(private gameSessionService: GameSessionService) {}

  ngOnInit(): void {
    this.subSessions = this.gameSessionService
      .apiGameSessionGet$Json()
      .subscribe({
        next: (res) => {
          this.AllGameSessions = res;
          this.dataSource = this.AllGameSessions;
        },
        error: (err) => console.log(err),
      });
  }

  ngOnDestroy(): void {
    this.subSessions.unsubscribe();
  }
}
