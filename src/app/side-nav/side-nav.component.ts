import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import {Nav } from '../custom-datatype.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  // to receive data from external world or parent component
  @Input() menuItems: Nav;

  // to emit data from child component to parent component
  @Output() selectedMenu = new EventEmitter();

  constructor(private readonly appService: AppService) { }

  ngOnInit() {
    console.log('Employee', this.menuItems);
  }

  onMenuItemClick(navItem: string){
    // this.selectedMenu.next(navItem);
   this.appService.emittingData.next(navItem);
  }

}
