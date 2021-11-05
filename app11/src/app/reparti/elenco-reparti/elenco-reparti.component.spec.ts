import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoRepartiComponent } from './elenco-reparti.component';

describe('ElencoRepartiComponent', () => {
  let component: ElencoRepartiComponent;
  let fixture: ComponentFixture<ElencoRepartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoRepartiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoRepartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
