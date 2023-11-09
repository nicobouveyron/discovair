import { TestBed } from '@angular/core/testing';

import { DrMapService } from './dr-map.service';

describe('DrMapService', () => {
  let service: DrMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
