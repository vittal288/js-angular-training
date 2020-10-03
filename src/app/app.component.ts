import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Employee, Nav } from './custom-datatype.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  sampleObject = {
    firstName: 'Vitthal',
    lastName: 'Kamkar',
    DOB: new Date(),
    age: 32,
    country: 'Bharath',
    address: {
      street: 'Mains street',
      doorNo: 20
    }
  };

  hideTable = true;
  public headerData = {
    companyName: 'New Company',
    logUrl : 'asdadad',
    selectedNavItems: null
  };

  public colArr = ['Name', 'Age', 'Country', 'Action'];
  public someData: string;
  public listOfMenus: Nav[] = [];
  public selectedItem : Nav;


  constructor(private readonly appService: AppService) {
    // console.log('constructor');
  }

  toggleTable() {
    this.hideTable = !this.hideTable;
  }

  onBtnClick(event: Event) {

  }

  deleteRow(rowIndex: number) {
    // delete item from an array, splice method is used to delete and as add the items the array
    // this.appService.employeesList.splice(rowIndex, 1);
  }

  addRow() {
    const newEmployee: Employee = {
      name: 'John',
      age: 50,
      country: 'France',
      address: {
        doorNumber: 123,
        street: 'down street',
      }
    };
    // this.employeesList.push(newEmployee);
    // this.appService.employeesList.splice(1, 1, newEmployee);
  }


  getFullName(): string {
    // ES5
    // return this.sampleObject.firstName + ' ' + this.sampleObject.lastName;
    // ES6 : string literal
    return `${this.sampleObject.firstName} ${this.sampleObject.lastName}`;
  }

  getTableRowData(rowData) {
    // console.log('row Data-->', rowData);
  }


  // component life cycle hook
  ngOnInit() {
    this.listOfMenus = this.appService.listOfMenus;
  }

  addNumbers(a: number, b: number): number {
    const sum = a + b;
    return sum;
  }

  onSelectedMenu(emittedData: Nav) {
    this.headerData.selectedNavItems = emittedData;
    this.selectedItem = emittedData;
  }
}


// components
// component life cycle
// modules
// services
// DI: dependency injection
// routing(navigation)
//  data binding (one way and two way data binding)
// Interpolation
//  directives (structural and non structural)
// pipes (built in and custom pipes)
// forms(reactive forms and template driver forms)
// HTTPCommons service
// Unit Testing
// Localization (internationalization)
// ()==> the event passes from HTML to component
// [] ==> the data passes from component to HTML/
// custom data types
// how to pass data from parent to child and child parent component

// passing data from app component to header component (parent to child)

// mention any design patterns : pub sub, facade
