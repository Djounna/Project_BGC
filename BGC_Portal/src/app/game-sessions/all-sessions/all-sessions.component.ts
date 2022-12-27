import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameSessionDto } from 'src/app/api/models';
import { GameSessionService } from 'src/app/api/services';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-sessions',
  templateUrl: './all-sessions.component.html',
  styleUrls: ['./all-sessions.component.css']
})
export class AllSessionsComponent implements OnInit {
 
  displayedColumns: string[] = ['Name','Description'];
  dataSource : any;

  public AllGameSession : GameSessionDto[] = [];
  sub! : Subscription;

  constructor(
    private gameSessionService : GameSessionService
   ) {}
  

  ngOnInit(): void {
    this.sub = this.gameSessionService.apiGameSessionGet$Json().subscribe({
      next : res =>{
      this.AllGameSession = res,
      this.dataSource = this.AllGameSession;
    },
      error: err => console.log(err)
    });
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
