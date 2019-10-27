import { TestBed } from '@angular/core/testing';

import { DoneTasksService } from './done-tasks.service';

describe('DoneTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoneTasksService = TestBed.get(DoneTasksService);
    expect(service).toBeTruthy();
  });
});
