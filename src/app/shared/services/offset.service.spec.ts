import { TestBed } from '@angular/core/testing';

import { OffsetService } from './offset.service';

describe('ResizeService', () => {
  let service: OffsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
