import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormComponent } from './form/form.component';
import { StaticFormComponent } from './static-form/static-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      { path: 'static', component: StaticFormComponent },
      { path: 'dynamic', component: DynamicFormComponent },
    ],
  },
  { path: '**', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
