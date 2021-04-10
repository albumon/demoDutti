import { Component, OnInit, Input } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-ships-details',
  templateUrl: '../template/ships-details.component.html',
  styleUrls: ['../scss/ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId = '';
  url = '';
  // Modal
  titleDetails = '';
  modelDetails = '';
  starship_class = '';

  constructor() {
  }

  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

  getStarshipId(url) {
    this.shipId = url.slice(0, -1);
    const urlImage = `${this.shipId}.jpg`;
    return urlImage !== '';
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class;
  }

}
