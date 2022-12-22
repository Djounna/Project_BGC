import { Component, Input, OnInit } from '@angular/core';
import { GameDto } from 'src/app/api/models';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() Game!: GameDto;

  constructor() { }

  ngOnInit(): void {
  }

}
