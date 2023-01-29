import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { GameVersionDto, GameDto } from 'src/app/api/models';
import { GameVersionService } from 'src/app/api/services';
import { AddGameComponent } from '../add-game/add-game.component';

@Component({
  selector: 'app-game-versions',
  templateUrl: './game-versions.component.html',
  styleUrls: ['./game-versions.component.css'],
})
export class GameVersionsComponent implements OnInit, OnDestroy {
  public gameVersions: GameVersionDto[] = [];
  sub!: Subscription;

  constructor(
    private gameVersionService: GameVersionService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameDto
  ) {}

  ngOnInit(): void {
    console.log(this.data);

    this.sub = this.gameVersionService.apiGameVersionGet$Json().subscribe({
      next: (res) =>
        (this.gameVersions = res.filter((x) => x.gameId === this.data.gameId)),
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
