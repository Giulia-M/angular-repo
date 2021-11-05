import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElancoAtletiComponent } from './elanco-atleti.component';

describe('ElancoAtletiComponent', () => {
  let component: ElancoAtletiComponent;
  let fixture: ComponentFixture<ElancoAtletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElancoAtletiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElancoAtletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
