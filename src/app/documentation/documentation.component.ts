import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  private canView: boolean = false;
  private documentCode: string = 'utvp';
  @ViewChild('documentCode') documentCodeRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  checkCode(inputCode) {
    if (inputCode.toLowerCase() === this.documentCode) {
      this.canView = true;
    } else {
      alert('Contact UTVP');
    }
  }

}
