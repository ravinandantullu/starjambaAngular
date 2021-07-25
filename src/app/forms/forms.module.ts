import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ReactiveFormComponent, FormComponent],
  imports: [CommonModule, FormsRoutingModule],
  exports: [FormComponent],
})
export class FormsModule {}
