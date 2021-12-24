import { TestBed } from '@angular/core/testing';

import { AlfresoApiServiceService } from './alfreso-api-service.service';

describe('AlfresoApiServiceService', () => {
  let service: AlfresoApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlfresoApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
