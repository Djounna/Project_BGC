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

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent implements OnInit {
  public newGame: GameDto = {};

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameDto
  ) {}

  ngOnInit(): void {}

  newGameForm = this.formBuilder.group({
    Name: ['', [Validators.required, Validators.maxLength(50)]],
    Description: ['', Validators.required],
    MinNumberPlayers: ['', Validators.required],
    MaxNumberPlayers: ['', Validators.required],
  });

  saveNewGame(): void {
    this.dialogRef.close(this.newGame);
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
