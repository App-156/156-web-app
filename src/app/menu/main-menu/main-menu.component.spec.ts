import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityHallProfileComponent } from './city-hall-profile.component';

describe('CityHallProfileComponent', () => {
  let component: CityHallProfileComponent;
  let fixture: ComponentFixture<CityHallProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityHallProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityHallProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
