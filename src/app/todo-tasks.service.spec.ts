import { TestBed } from '@angular/core/testing';

import { TodoTasksService } from './todo-tasks.service';

describe('TodoTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoTasksService = TestBed.get(TodoTasksService);
    expect(service).toBeTruthy();
  });
});
