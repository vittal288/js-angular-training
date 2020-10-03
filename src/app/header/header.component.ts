import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerData: any;

  constructor(private readonly appService: AppService) { }

  ngOnInit() {
    this.appService.emittingDatAsObs.subscribe((data: any) => {
      console.log('Header Component ', data);
    });
  }

  onDeleteItem(){
    this.appService.listOfMenus.splice(1, 1);
  }

}
