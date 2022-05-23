import { TestBed } from '@angular/core/testing';

import { PayauthGuard } from './payauth.guard';

describe('PayauthGuard', () => {
  let guard: PayauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PayauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
