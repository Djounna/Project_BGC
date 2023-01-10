import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { GameDto } from 'src/app/api/models';
import { DialogData } from 'src/app/shared/navbar/navbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent implements OnInit {
  public newGame: GameDto = {};

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameDto
  ) {}

  ngOnInit(): void {}

  newGameForm = this.formBuilder.group({
    Name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    ],
    Description: ['', Validators.required],
    MinNumberPlayers: [
      0,
      [Validators.required, Validators.min(2), Validators.max(8)],
    ],
    MaxNumberPlayers: [
      0,
      [Validators.required, Validators.min(2), Validators.max(8)],
    ],
  });

  saveNewGame(): void {
    if (this.newGameForm.valid) {
      this.newGame = {
        name: this.newGameForm.value.Name,
        description: this.newGameForm.value.Description,
        minNumberPlayers: this.newGameForm.value.MinNumberPlayers,
        maxNumberPlayers: this.newGameForm.value.MaxNumberPlayers,
      };
      this.dialogRef.close(this.newGame);
      this.openSnackBar('Nouveau jeu ajouté avec succès');
    } else {
      this.openSnackBar('Le formulaire est incorrect');
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 4000 });
  }
}
