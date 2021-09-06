import { TestBed } from '@angular/core/testing';

import { HolaMundoService } from './hola-mundo.service';

describe('HolaMundoService', () => {
  let service: HolaMundoService;
 /asdlñfkasdf
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolaMundoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
