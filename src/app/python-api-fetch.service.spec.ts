import { TestBed } from '@angular/core/testing';

import { PythonApiFetchService } from './python-api-fetch.service';

describe('PythonApiFetchService', () => {
  let service: PythonApiFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonApiFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
