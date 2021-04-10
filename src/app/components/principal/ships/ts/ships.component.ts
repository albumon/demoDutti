import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: '../template/ships.component.html',
  styleUrls: ['../scss/ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];

  constructor( private shipsService: ShipsService) {}

  ngOnInit(): void {
    console.log('incializado');
    this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList.results);
    });
  }
}
