#Forms 
---
* Dynamic Forms:
  * Step 1:
    Import the reactive form module to the app module file
  * Step 2:
    For example if we have form give name to that form 
      * ```javascript 
          <form [formGroup]="signInForm" (ngSubmit)="signIn()"> 
        ```
  * Step 3: 
    * Give Form control Name to all the forms
    * ```javascript
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" formControlName="email" />
      ```
  * Step 4:
    * Import the FormBuilder, FormControl from @angular/forms';
    * Import FormBuilder into the constructor private formBuilder: FormBuilder
    * Create a form group in the constructor 
    * ```javascript 
          constructor(private formBuilder: FormBuilder) {
            this.signInForm = this.formBuilder.group({
              email: new FormControl(),
              password: new FormControl(),
              inputAddress: new FormControl(),
              inputAddress2: new FormControl(),
              inputCity: new FormControl(),
              inputState: new FormControl(),
              inputZip: new FormControl(),
              gridCheck: new FormControl(),
            });
          }
        ```
    * Step 5:
      * get the value and value change and status change events
      * ```javascript
            // Read the values
            signIn() {
              // Get all the values
              console.log(this.signInForm.value);
              // Get single key value based on the property
              console.log(this.signInForm.get('email')?.value);

              // Get the values based on the value change
              // Value change requires the subscribe method to detect the changes
              console.log(this.signInForm.valueChanges);

              // We can use the status change method to track the change of the status of
               this.signInForm.valueChanges.get('email').subscribe((data)=>
               {
                 // gets the status if the form wheather it is valid or Invalid
                 console.log(data); // Valid or Invalid
               });
            }
        ``` 
    * Step 6:
      * We can have the from validator error on the templates to show the error with respect to the error's we get
        * ```javascript
              this.signInform.get(email).hasError();
          ```
    * Step 7:
      * We reset the forms using the reset method 
        * * ```javascript
              this.signInform.reset();
          ```
    * step 8:
      * Form Arrays
        * have a key with formarray
          * ```javascript
              this.formBuilder.group(
                users: new formArray([
                  this.fb.group({
                    'name': new FormControl('Test'),
                    'email': new FormControl('Hello')
                  })
                ]) 
              )

              // For creating formArray on the templeate we need to give the formArrayName 
              // Loop through the array values and print the values to the DOM
              <div *ngFor="let control in signInForm.controls.users[controls];let i=index;" [formGroupName]="i">
                <input type="text" formControlName="name"/>
                <input type="text" formControlName="email"/>
              </div>
          ```
# Form Validations:
  * ng-valid --> Valid or invalid form
  * ng-invalid --> Valid or Invalid form
  * ng-pending --> 
  * ng-prestine --> User touched it but data was not modified
  * Ng-dirty --> Data was touched
  * ng-touched --> Form was touched
  * ng-untouched --> 
    