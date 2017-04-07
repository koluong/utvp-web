import { Component, OnInit } from '@angular/core';
import { Request } from './request';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  request = new Request();
  order = ['Mac', 'PC', 'Monitor', 'Printer', 'TV'];
  departments = ["Accounting","Production", "Casting", "Transportation", "Writers", "Location Manager", "Smart Start (DSP)"];
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.request);
  }

  constructor() { }

  ngOnInit() {
  }

}
