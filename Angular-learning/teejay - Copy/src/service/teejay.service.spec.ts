import { TestBed } from '@angular/core/testing';

import { TeejayService } from './teejay.service';

describe('TeejayService', () => {
  let service: TeejayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeejayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
