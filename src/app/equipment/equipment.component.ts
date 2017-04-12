import { Component, OnInit } from '@angular/core';
import { Computer } from './computer.model';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  typeSelected: Computer[];
  equipmentType:string[] = ['Mac', 'Windows', 'Peripherals'];

  constructor() { }

  ngOnInit() {
  }

  macEquipment: Computer[] = [
    new Computer('13-inch MacBook Pro', 'macOS Sierra', './assets/photo/mbp-2015-13.png'),
    new Computer('21.5-inch iMac','macOS Sierra','./assets/photo/imac-2013-21.jpg')
  ];
  windowsEquipment: Computer[] = [
    new Computer('Dell Optiplex','Windows 7 Desktop PC','./assets/photo/dell-opt-dt.jpg')

  ];
  peripheralsEquipment: Computer[] = [
    new Computer('21-inch PC Monitor','Dell PC Monitor','./assets/photo/dell-mon-21.png'),
    new Computer('Kenny Luong','Super Sexy IT Professional','./assets/photo/koluong.jpg')
  ];

  selectType(type) {
    if (type == 'Mac') {
      this.typeSelected = this.macEquipment;
    } else if (type == 'Windows') {
      this.typeSelected = this.windowsEquipment;
    } else if (type == 'Peripherals') {
      this.typeSelected = this.peripheralsEquipment;
    }
  }

}
