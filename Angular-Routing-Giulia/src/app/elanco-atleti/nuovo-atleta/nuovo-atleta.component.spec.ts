import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoAtletaComponent } from './nuovo-atleta.component';

describe('NuovoAtletaComponent', () => {
  let component: NuovoAtletaComponent;
  let fixture: ComponentFixture<NuovoAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoAtletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
