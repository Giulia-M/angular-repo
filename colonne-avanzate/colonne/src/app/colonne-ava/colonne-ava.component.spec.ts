import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonneAvaComponent } from './colonne-ava.component';

describe('ColonneAvaComponent', () => {
  let component: ColonneAvaComponent;
  let fixture: ComponentFixture<ColonneAvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColonneAvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonneAvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
