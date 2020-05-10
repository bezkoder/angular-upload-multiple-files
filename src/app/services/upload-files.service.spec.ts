import { TestBed } from '@angular/core/testing';

import { UploadFilesService } from './upload-files.service';

describe('UploadFilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadFilesService = TestBed.get(UploadFilesService);
    expect(service).toBeTruthy();
  });
});
