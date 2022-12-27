import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameSessionDto } from '../api/models';
import { GameSessionService } from '../api/services';

@Component({
  selector: 'app-game-sessions',
  templateUrl: './game-sessions.component.html',
  styleUrls: ['./game-sessions.component.css']
})
export class GameSessionsComponent implements OnInit, OnDestroy {

  public AllGameSession : GameSessionDto[] = [];
  sub! : Subscription;

  constructor(
    private gameSessionService : GameSessionService
   ) {}
  

  ngOnInit(): void {
    this.sub = this.gameSessionService.apiGameSessionGet$Json().subscribe({
      next : res => this.AllGameSession = res,
      error: err => console.log(err)
    });
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
