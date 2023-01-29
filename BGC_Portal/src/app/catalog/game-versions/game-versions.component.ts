import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { GameVersionDto, GameDto } from 'src/app/api/models';
import { GameVersionService } from 'src/app/api/services';
import { AddGameComponent } from '../add-game/add-game.component';
import { AddVersionComponent } from '../add-version/add-version.component';
import { UpdateVersionComponent } from '../update-version/update-version.component';

@Component({
  selector: 'app-game-versions',
  templateUrl: './game-versions.component.html',
  styleUrls: ['./game-versions.component.css'],
})
export class GameVersionsComponent implements OnInit, OnDestroy {
  public gameVersions: GameVersionDto[] = [];
  sub!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;
  newVersion: GameVersionDto = {};
  updatedVersion: GameVersionDto = {};

  constructor(
    private gameVersionService: GameVersionService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: GameDto
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    // TO DO: Review api call to a more precise call.
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
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
    if (this.sub3) {
      this.sub3.unsubscribe();
    }
  }

  addVersionDialog(): void {
    const dialogRef = this.dialog.open(AddVersionComponent, {
      data: this.data,
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        this.newVersion = res;
        this.newVersion.gameVersionId = 0;
        console.log(this.newVersion);
        this.sub2 = this.gameVersionService
          .apiGameVersionPost({ body: this.newVersion })
          .subscribe({
            next: (res) => console.log(res),
            error: (err) => console.log(err),
            complete: () => {
              console.log('new version successfully created');
              this.openSnackBar('Nouvelle version ajoutée');
              this.ngOnInit();
            },
          });
      },
      error: (err) => console.log(err),
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 4000 });
  }

  updateVersionDialog(version: GameVersionDto): void {
    const dialogRef = this.dialog.open(UpdateVersionComponent, {
      data: version,
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        this.updatedVersion = res;
        console.log(res);
        this.sub3 = this.gameVersionService
          .apiGameVersionPut({
            id: this.updatedVersion.gameVersionId,
            body: this.updatedVersion,
          })
          .subscribe({
            next: (res) => console.log(res),
            error: (err) => console.log(err),
            complete: () => {
              console.log('version successfully udpated');
              this.openSnackBar('Version mise à jour avec succès');
              this.ngOnInit();
            },
          });
      },
      error: (err) => console.log(err),
    });
  }
}
