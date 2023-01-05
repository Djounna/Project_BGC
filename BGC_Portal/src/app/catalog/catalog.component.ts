import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { GameDto } from '../api/models';
import { GameService } from '../api/services';
import { AddGameComponent } from './add-game/add-game.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  games!: GameDto[];
  sub!: Subscription;
  newGame: GameDto = {};

  constructor(private gameService: GameService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.sub = this.gameService.apiGameGet$Json().subscribe({
      next: (res) => (this.games = res),
      error: (e) => console.log('Error : ' + e.message),
      complete: () => console.log('complete'),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addGameDialog(): void {
    const dialogRef = this.dialog.open(AddGameComponent, {
      data: this.newGame,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.newGame = result;
    });
  }
}
