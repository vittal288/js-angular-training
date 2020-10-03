import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { ReactiveFromComponent } from './forms/reactive-from/reactive-from.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'template-form',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'reactive-form',
        component: ReactiveFromComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
