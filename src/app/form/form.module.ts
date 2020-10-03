import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, } from '@angular/router';

import { ReactiveFromComponent } from './forms/reactive-from/reactive-from.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    FormsComponent,
    TemplateDrivenFormComponent,
    ReactiveFromComponent],
  imports: [FormRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
  providers: [

  ]
})
export class FormModule { }
