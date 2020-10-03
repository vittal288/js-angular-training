import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';

import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  // angular APIs to normal HTML form
  @ViewChild('f', { static: true }) userForm: NgForm;

  constructor(private readonly http: HttpService, private appService: AppService) { }

  ngOnInit() {
  }

  createUserFormSubmit() {
    const formPayload = this.userForm.value;
    this.appService.postDataToServer(formPayload);
  }

}
