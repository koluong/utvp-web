import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  featureActive: string = 'home';

  @Output() featureChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectFeature(feature: string) {
    this.featureActive = feature;
    this.featureChange.emit(feature);
  }

}
