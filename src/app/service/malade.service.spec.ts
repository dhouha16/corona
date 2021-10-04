import { TestBed } from '@angular/core/testing';

import { MaladeService } from './malade.service';

describe('MaladeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaladeService = TestBed.get(MaladeService);
    expect(service).toBeTruthy();
  });
});
