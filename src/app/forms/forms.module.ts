import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form/form.component';
import { StaticFormComponent } from './static-form/static-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, StaticFormComponent, DynamicFormComponent],
  imports: [CommonModule, FormsRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [FormComponent],
})
export class FormsAppModule {}
