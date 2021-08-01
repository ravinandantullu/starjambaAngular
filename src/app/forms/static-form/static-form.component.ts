import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-static-form',
  templateUrl: './static-form.component.html',
  styleUrls: ['./static-form.component.sass'],
})
export class StaticFormComponent implements OnInit {
  email: string;
  constructor() {
    this.email = '';
  }

  ngOnInit(): void {}

  submit(formValue: NgForm) {
    console.log(formValue.value);
  }
}
