import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoFilmComponent } from './elenco-film.component';

describe('ElencoFilmComponent', () => {
  let component: ElencoFilmComponent;
  let fixture: ComponentFixture<ElencoFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
