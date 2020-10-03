import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  static URL = 'https://reqres.in/api/users';

  tableColumns = ['ID', 'First Name', 'Last Name', 'Email', 'Picture', 'DOB', 'Action'];
  showError = false;
  constructor(private readonly http: HttpService, public appService: AppService) {

  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    const getUsetListUrl = `${UserListComponent.URL}?page=2`;
    this.http.get(getUsetListUrl).subscribe(response => {
      response.data.forEach(item => {
          item['DOB'] = new Date();
      });
      this.appService.usersList = response.data;
    });
  }

  onDeleteUser(userId: number) {
    const deleteUserUrl = `${UserListComponent.URL}/${userId}`;
    this.http.delete(deleteUserUrl).subscribe(response => {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    });
  }
}
