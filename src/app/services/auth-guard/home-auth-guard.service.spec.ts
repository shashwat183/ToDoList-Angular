import { TestBed } from '@angular/core/testing';

import { HomeAuthGuardService } from './home-auth-guard.service';

describe('HomeAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeAuthGuardService = TestBed.get(HomeAuthGuardService);
    expect(service).toBeTruthy();
  });
});
