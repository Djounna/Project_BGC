import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GameDto } from 'src/app/api/models';
import { GameService } from 'src/app/api/services';
import { UpdateGameComponent } from '../update-game/update-game.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameVersionsComponent } from '../game-versions/game-versions.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit, OnDestroy {
  @Input() Game!: GameDto;
  @Input() CanModify: boolean = true;
  @Input() CanCreate: boolean = true;
  updatedGame: GameDto = {};
  sub!: Subscription;

  constructor(
    private gameService: GameService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  updateGameDialog(): void {
    const dialogRef = this.dialog.open(UpdateGameComponent, {
      data: this.Game,
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        this.updatedGame = res;
        console.log(res);
        this.sub = this.gameService
          .apiGamePut({ id: this.updatedGame.gameId, body: this.updatedGame })
          .subscribe({
            next: (res) => console.log(res),
            error: (err) => console.log(err),
            complete: () => {
              console.log('Game successfully udpated');
              this.openSnackBar('Jeu modifié avec succès');
              this.ngOnInit();
            },
          });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  versionGameDialog(): void {
    const dialogRef = this.dialog.open(GameVersionsComponent, {
      data: this.Game,
    });
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 4000 });
  }
}
