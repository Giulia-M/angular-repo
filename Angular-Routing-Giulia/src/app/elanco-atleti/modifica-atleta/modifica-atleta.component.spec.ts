import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaAtletaComponent } from './modifica-atleta.component';

describe('ModificaAtletaComponent', () => {
  let component: ModificaAtletaComponent;
  let fixture: ComponentFixture<ModificaAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaAtletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
