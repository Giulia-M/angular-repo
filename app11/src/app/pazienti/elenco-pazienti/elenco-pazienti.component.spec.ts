import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoPazientiComponent } from './elenco-pazienti.component';

describe('ElencoPazientiComponent', () => {
  let component: ElencoPazientiComponent;
  let fixture: ComponentFixture<ElencoPazientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoPazientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoPazientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
