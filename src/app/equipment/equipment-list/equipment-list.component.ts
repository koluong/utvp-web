import { Component, OnInit, Input } from '@angular/core';
import { Computer } from '../computer.model';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  @Input() viewType: Computer[];

  constructor() {
    console.log("viewType: " + this.viewType);
  }

  ngOnInit() {
  }

  test() {
    console.log("viewType: " + this.viewType);
  }

}
