import { Component, OnInit, Input } from '@angular/core';
import { Computer } from '../computer.model';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {
  @Input() computer:Computer;

  constructor() { }

  ngOnInit() {
  }

}
