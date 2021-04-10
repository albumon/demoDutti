import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Ship } from 'src/app/shared/models/ship.model';
import { GeneralUtil } from 'src/app/shared/util/general-util';

declare var $: any;


@Component({
  selector: 'app-ships-details',
  templateUrl: '../template/ships-details.component.html',
  styleUrls: ['../scss/ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit, OnChanges {

  @Input() dataList: Ship[];
  @Output() nextLoad: EventEmitter<any> = new EventEmitter<any>();
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
      this.loadConfig();
  }

  /**
   * Method called when @Input() changes
   * @param changes changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (GeneralUtil.isWorkableObject(changes.dataList) && GeneralUtil.isWorkableObject(this.config)) {
      // dataList has changed
      this.refreshConfig();
    }
  }

  getStarshipId(url) {
    this.shipId = url.slice(0, -1);
    const urlImage = `${this.shipId}.jpg`;
    return urlImage !== '';
  }

  loadConfig() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.dataList.length
    };
  }

  refreshConfig() {
    this.config.totalItems = this.dataList.length;
  }

  pageChanged(event){
    this.config.currentPage = event;
    // Calculate if it is the last page
    if (this.config.currentPage === (this.config.totalItems / this.config.itemsPerPage)) {
      // Load the next page
      this.nextLoad.emit();
    }
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class;
  }

}
