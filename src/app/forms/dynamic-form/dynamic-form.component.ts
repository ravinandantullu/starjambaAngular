import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.sass'],
})
export class DynamicFormComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // We have form validators for validating the values
    // Validators.compose is also there for doing the validations
    this.signInForm = this.formBuilder.group({
      email: new FormControl('Test@hello.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('Test', [
        Validators.required,
        Validators.min(8),
        Validators.max(20),
      ]),
      inputAddress: new FormControl('7340 Calle Cristobal'),
      inputAddress2: new FormControl('Unit 90'),
      inputCity: new FormControl('San Diego'),
      inputState: new FormControl('California'),
      inputZip: new FormControl('92126'),
      gridCheck: new FormControl(),
    });

    let formValues = {
      email: 'hello',
      password: 'Test',
      inputAddress: '7340 Calle Cristobal',
      inputAddress2: 'Unti 90',
      inputCity: 'San Diego',
      inputState: 'California',
      inputZip: '92126',
      gridCheck: true,
    };
    // Another way of setting the form values
    // Set value requires all the feild values to set the value
    // We can patchValue to set only few values(Do not to set all the values)
    this.signInForm.setValue(formValues);
  }

  ngOnInit(): void {}

  // Read the values
  signIn() {
    // Get all the values
    console.log(this.signInForm.value);
    // Get single key value based on the property
    console.log(this.signInForm.get('email')?.value);

    // Get the values based on the value change
    // Value change requires the subscribe method to detect the changes
    console.log(this.signInForm.valueChanges);
  }
}
