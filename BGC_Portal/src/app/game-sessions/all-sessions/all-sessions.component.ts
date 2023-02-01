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
  allGameSessions: GameSessionDto[] = [];
  subSessions!: Subscription;
  dataSource: any;
  displayedColumns: string[] = [
    'Name',
    'Description',
    'MinNumberPlayer',
    'MaxNumberPlayer',
    'Schedule',
  ];

  constructor(private gameSessionService: GameSessionService) {}

  ngOnInit(): void {
    this.subSessions = this.gameSessionService
      .apiGameSessionGet$Json()
      .subscribe({
        next: (res) => {
          this.allGameSessions = res;
          this.dataSource = this.allGameSessions;
        },
        error: (err) => console.log(err),
      });
  }

  ngOnDestroy(): void {
    this.subSessions.unsubscribe();
  }
}
