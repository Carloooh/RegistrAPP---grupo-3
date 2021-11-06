import { TestBed } from '@angular/core/testing';

import { LeerqrService } from './leerqr.service';

describe('LeerqrService', () => {
  let service: LeerqrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerqrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
