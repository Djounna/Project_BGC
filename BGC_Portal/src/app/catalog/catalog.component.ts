import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private gameService: GameService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

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

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        this.newGame = res;
        this.newGame.gameId = 0;
        this.gameService.apiGamePost({ body: this.newGame }).subscribe({
          next: (res) => console.log(res),
          error: (err) => console.log(err),
          complete: () => {
            console.log('new game successfully created');
            this.openSnackBar('Nouveau jeu ajouté avec succès');
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 4000 });
  }
}
