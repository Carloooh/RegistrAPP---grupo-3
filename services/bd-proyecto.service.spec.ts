import { TestBed } from '@angular/core/testing';

import { BdProyectoService } from './bd-proyecto.service';

describe('BdProyectoService', () => {
  let service: BdProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
