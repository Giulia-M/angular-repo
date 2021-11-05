import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErroreComponent } from './pagina-errore.component';

describe('PaginaErroreComponent', () => {
  let component: PaginaErroreComponent;
  let fixture: ComponentFixture<PaginaErroreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaErroreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaErroreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
