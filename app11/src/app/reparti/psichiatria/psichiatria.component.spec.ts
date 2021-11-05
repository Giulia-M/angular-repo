import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsichiatriaComponent } from './psichiatria.component';

describe('PsichiatriaComponent', () => {
  let component: PsichiatriaComponent;
  let fixture: ComponentFixture<PsichiatriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsichiatriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsichiatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
