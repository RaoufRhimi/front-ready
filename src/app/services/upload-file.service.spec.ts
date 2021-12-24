import { TestBed } from '@angular/core/testing';

import { UploadFilService } from './upload-file.service';

describe('UploadFilService', () => {
  let service: UploadFilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
