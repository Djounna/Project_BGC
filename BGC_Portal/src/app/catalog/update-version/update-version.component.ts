import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameDto, GameVersionDto } from 'src/app/api/models';
import { AddGameComponent } from '../add-game/add-game.component';

@Component({
  selector: 'app-update-version',
  templateUrl: './update-version.component.html',
  styleUrls: ['./update-version.component.css'],
})
export class UpdateVersionComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateVersionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameVersionDto
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  versionForm = this.formBuilder.group({
    name: [
      this.data.name,
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    ],
  });

  udpateVersion(): void {
    if (this.versionForm.valid) {
      Object.assign(this.data, this.versionForm.value);
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
