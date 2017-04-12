import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '../computer.model';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
  @Input() viewType: Computer[];
  @Output() selectDetail = new EventEmitter<Computer>();
  selectedComp: Computer;

  constructor() {

  }

  ngOnInit() {
  }

  onSelectDetail(comp) {
    this.selectedComp = comp;
    this.selectDetail.emit(comp);
  }

}
