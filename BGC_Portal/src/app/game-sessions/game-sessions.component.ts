import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameSessionDto, MemberDto } from '../api/models';
import { GameSessionService, MemberService } from '../api/services';

@Component({
  selector: 'app-game-sessions',
  templateUrl: './game-sessions.component.html',
  styleUrls: ['./game-sessions.component.css'],
})
export class GameSessionsComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
