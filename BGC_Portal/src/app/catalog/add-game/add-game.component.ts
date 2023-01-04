import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  newGameForm = this.formBuilder.group({
    Name: ['', Validators.required],
    Description: ['', Validators.required],
    MinNumberPlayers: ['', Validators.required],
    MaxNumberPlayers: ['', Validators.required],
  });
}
