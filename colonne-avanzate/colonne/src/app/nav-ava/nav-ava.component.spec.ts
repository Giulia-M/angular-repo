import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAvaComponent } from './nav-ava.component';

describe('NavAvaComponent', () => {
  let component: NavAvaComponent;
  let fixture: ComponentFixture<NavAvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
