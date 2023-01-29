import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameVersionDto, GameDto } from 'src/app/api/models';
import { AddGameComponent } from '../add-game/add-game.component';

@Component({
  selector: 'app-add-version',
  templateUrl: './add-version.component.html',
  styleUrls: ['./add-version.component.css'],
})
export class AddVersionComponent implements OnInit {
  public newVersion: GameVersionDto = {};

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddVersionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameDto
  ) {}

  ngOnInit(): void {}

  newVersionForm = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    ],
  });

  saveNewVersion(): void {
    if (this.newVersionForm.valid) {
      this.newVersion = {
        gameId: this.data.gameId,
        name: this.newVersionForm.value.name,
      };
      this.dialogRef.close(this.newVersion);
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
