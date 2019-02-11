import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviagationComponent } from './naviagation.component';

describe('NaviagationComponent', () => {
  let component: NaviagationComponent;
  let fixture: ComponentFixture<NaviagationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviagationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviagationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
