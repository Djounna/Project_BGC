import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameDto } from '../api/models';
import { GameService} from '../api/services';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  games! : GameDto[];
  sub! : Subscription;


  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.sub = this.gameService.apiGameGet$Json().subscribe(
      {
        next: (res) => 
        this.games = res,
        error: (e) => console.log('Error : ' + e.message),
        complete: () => console.log('complete')
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
