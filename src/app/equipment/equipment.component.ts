import { Component, OnInit } from '@angular/core';
import { Computer } from './computer.model';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  typeButtonSelected: string;
  typeSelected: Computer[];
  equipmentType: string[] = ['Mac', 'Windows', 'Peripherals'];
  detailSelected: Computer;

  constructor() { }

  ngOnInit() {
  }

  macEquipment: Computer[] = [
    new Computer('MacBook Pro', '13-inch macOS Sierra Laptop', './assets/photo/mbp-2015-13.png'),
    new Computer('MacBook Air', '13-inch macOS Sierra Laptop', './assets/photo/mba-2015-13.jpg'),
    new Computer('iMac','21.5-inch macOS Sierra Desktop','./assets/photo/imac-2013-21.jpg'),
    new Computer('iPad', '13-inch macOS Sierra Laptop', './assets/photo/ipad.png'),
    new Computer('Mouse', '13-inch macOS Sierra Laptop', './assets/photo/mbp-2015-13.png'),
    new Computer('Wireless Keyboard', '13-inch macOS Sierra Laptop', './assets/photo/mbp-2015-13.png'),
    new Computer('Wired Keyboard', '13-inch macOS Sierra Laptop', './assets/photo/mbp-2015-13.png')
  ];
  windowsEquipment: Computer[] = [
    new Computer('Dell Latitude','14-inch Windows 7 Laptop','./assets/photo/dell-lat-lt.png'),
    new Computer('Dell Laptop Dock','Windows 7 Desktop PC','./assets/photo/dell-opt-dt.jpg'),
    new Computer('Dell Optiplex','Windows 7 Desktop PC','./assets/photo/dell-opt-dt.jpg'),
    new Computer('PC Monitor','21-inch Dell Monitor','./assets/photo/dell-mon-21.png'),
    new Computer('Mouse','Windows 7 Desktop PC','./assets/photo/dell-opt-dt.jpg'),
    new Computer('Wired Keybaord','Windows 7 Desktop PC','./assets/photo/dell-opt-dt.jpg')
  ];
  peripheralsEquipment: Computer[] = [
    new Computer('PC Monitor','21-inch Dell Monitor','./assets/photo/dell-mon-21.png'),
    new Computer('Printer','Personal Printer for Office','./assets/photo/brother-printer.jpg'),
    new Computer('Television','32-inch to 60-inch Television','./assets/photo/tv.jpg'),
    new Computer('Wires','32-inch to 60-inch Television','./assets/photo/tv.jpg'),
    new Computer('Surge Protector','32-inch to 60-inch Television','./assets/photo/tv.jpg'),
    new Computer('Kenny Luong','Super IT Professional','./assets/photo/koluong.jpg')
  ];

  selectType(type) {
    if (type === 'Mac') {
      this.typeButtonSelected = 'Mac';
      this.typeSelected = this.macEquipment;
    } else if (type === 'Windows') {
      this.typeButtonSelected = 'Windows';
      this.typeSelected = this.windowsEquipment;
    } else if (type === 'Peripherals') {
      this.typeButtonSelected = 'Peripherals';
      this.typeSelected = this.peripheralsEquipment;
    }
  }

  showDetail(comp) {
    this.detailSelected = comp;
  }

}
