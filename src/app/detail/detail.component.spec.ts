import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DetailComponent } from './detail.component';
import { HttpClientModule } from '@angular/common/http';

fdescribe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return sum of two numbers', () => {
    // arrange
    // act
    // assert
    const ret = component.add(4, 4);
    expect(ret).toBe(8);
  });

  it('should return number of times from given number', ()=>{
    // arrange
    component.nOfTime = 20;

    // act
    const retValue = component.mult(10);

    // assert
    expect(retValue).toBe(200);
  })
});
