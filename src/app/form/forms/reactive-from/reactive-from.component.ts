import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss']
})
export class ReactiveFromComponent implements OnInit {

  public userForm: FormGroup;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.minLength(8), Validators.maxLength(10)]),
      lastName: new FormControl(null, [Validators.minLength(8), Validators.maxLength(10)]),
      email: new FormControl(null, [Validators.email])
    });
  }

  createUserFormSubmit() {
    const formPayload = this.userForm.value;
    this.appService.postDataToServer(formPayload);
  }

}
