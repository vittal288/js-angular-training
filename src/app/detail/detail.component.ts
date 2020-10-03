import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Nav } from '../custom-datatype.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() detailsData: Nav;
  nOfTime = 10;
  constructor(private readonly appService: AppService) { }

  ngOnInit() {
    this.appService.emittingDatAsObs.subscribe((data: Nav) => {
     this.detailsData = data;
    });
  }

  add(a: number, b: number) {
    return a + b;
  }

  mult(givenNumber: number){
    return givenNumber * this.nOfTime;
  }

}
