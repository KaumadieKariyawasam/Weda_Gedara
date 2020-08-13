import { TestBed } from '@angular/core/testing';

import { SpaService } from './spa.service';

describe('SpaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaService = TestBed.get(SpaService);
    expect(service).toBeTruthy();
  });
});
