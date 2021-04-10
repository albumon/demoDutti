import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShipsService } from 'src/app/services/ships/ships.service';
import { Ship } from 'src/app/shared/models/ship.model';
import { AppState } from 'src/app/store';
import * as fromstore from '../../../../store';

@Component({
  selector: 'app-ships',
  templateUrl: '../template/ships.component.html',
  styleUrls: ['../scss/ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];

  public shipList: Ship[] = [];

  constructor( private store: Store<AppState> ) {
    // Subscribe to store
    store.select(fromstore.getShips).subscribe((ships) => {
      this.dataList = ships;
    });
  }

  ngOnInit(): void {
    // Notify the store to load the ships
    this.store.dispatch(new fromstore.LoadShip());
  }
}
