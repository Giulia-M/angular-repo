import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioAtletaComponent } from './dettaglio-atleta.component';

describe('DettaglioAtletaComponent', () => {
  let component: DettaglioAtletaComponent;
  let fixture: ComponentFixture<DettaglioAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioAtletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
