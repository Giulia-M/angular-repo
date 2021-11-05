import { TestBed } from '@angular/core/testing';

import { ControlloPazientiGuard } from './controllo-pazienti.guard';

describe('ControlloPazientiGuard', () => {
  let guard: ControlloPazientiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlloPazientiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
