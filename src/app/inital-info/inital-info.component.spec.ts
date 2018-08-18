import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitalInfoComponent } from './inital-info.component';

describe('InitalInfoComponent', () => {
  let component: InitalInfoComponent;
  let fixture: ComponentFixture<InitalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
