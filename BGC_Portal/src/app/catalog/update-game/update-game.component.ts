import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameDto } from 'src/app/api/models';
import { AddGameComponent } from '../add-game/add-game.component';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css'],
})
export class UpdateGameComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameDto
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  gameForm = this.formBuilder.group({
    name: [
      this.data.name,
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    ],
    description: [this.data.description, Validators.required],
    minNumberPlayers: [
      this.data.minNumberPlayers,
      [Validators.required, Validators.min(1), Validators.max(8)],
    ],
    maxNumberPlayers: [
      this.data.maxNumberPlayers,
      [Validators.required, Validators.min(2), Validators.max(8)],
    ],
    imageLink: [
      this.data.imageLink,
      [Validators.required, Validators.maxLength(500)],
    ],
    year: [this.data.year, [Validators.min(0), Validators.max(2030)]],
  });

  updateGame(): void {
    if (this.gameForm.valid) {
      Object.assign(this.data, this.gameForm.value);
      this.dialogRef.close(this.data);
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
