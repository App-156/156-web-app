import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuRepresentativeComponent } from './side-menu-representative.component';

describe('SideMenuRepresentativeComponent', () => {
  let component: SideMenuRepresentativeComponent;
  let fixture: ComponentFixture<SideMenuRepresentativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuRepresentativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
