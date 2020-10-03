import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee, Nav } from './custom-datatype.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private URL = 'https://reqres.in/api/users';
  public emittingData = new Subject();

  public emittingDatAsObs: Observable<any>;

  private _employeesList: Employee[] = [
    {
      name: 'Hetal',
      age: 32,
      country: 'USA',
      address: {
        street: 'main street',
        doorNumber: 123,
      }
    },
    {
      name: 'Vittal',
      age: 32,
      country: 'India'
    },
    {
      name: 'Akhila',
      age: 32,
      country: 'France'
    }
  ];

  private _listOfMenus: Nav[] = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'About Us',
      link: '/about-us'
    },
    {
      name: 'Contact Us',
      link: '/contact-us'
    },
    {
      name: 'Feed Back',
      link: '/feedback'
    }
  ];
  public usersList = [];

  constructor(private http: HttpService) {
    this.emittingDatAsObs = this.emittingData.asObservable();
  }

  // getEmployeeList(): Employee[] {
  //   return this.employeesList;
  // }

  // getListOfMenuItems(): Nav[] {
  //   return this.listOfMenus;
  // }

  // getter method and setter method
  get employeesList(): Employee[] {
    return this._employeesList;
  }

  get listOfMenus(): Nav[] {
    return this._listOfMenus;
  }

  // set employeesList(employee: Employee) {
  //   this._employeesList.push(employee);
  // }

  postDataToServer(payload) {
    const createRestAPIURL = `${this.URL}`;
    this.http.post(createRestAPIURL, payload).subscribe(response => {
      console.log('resp', response);
      const updatedResponse = {
        first_name: response['firstName'],
        last_name: response['lastName'],
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
        ...response
      };
      this.usersList.push(updatedResponse);
    });
  }
}
