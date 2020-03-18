import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitepartComponent } from './sitepart.component';

describe('SitepartComponent', () => {
  let component: SitepartComponent;
  let fixture: ComponentFixture<SitepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
