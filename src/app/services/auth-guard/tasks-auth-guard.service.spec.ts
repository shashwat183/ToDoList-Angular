import { TestBed } from '@angular/core/testing';

import { TasksAuthGuardService } from './tasks-auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksAuthGuardService = TestBed.get(TasksAuthGuardService);
    expect(service).toBeTruthy();
  });
});
