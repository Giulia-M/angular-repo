import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPostComponent } from './modifica-post.component';

describe('ModificaPostComponent', () => {
  let component: ModificaPostComponent;
  let fixture: ComponentFixture<ModificaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
