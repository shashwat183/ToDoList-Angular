import { TestBed } from '@angular/core/testing';

import { TasksApiService } from './tasks-api.service';

describe('TasksApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksApiService = TestBed.get(TasksApiService);
    expect(service).toBeTruthy();
  });
});
