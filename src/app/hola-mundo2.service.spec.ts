import { TestBed } from '@angular/core/testing';

import { HolaMundo2Service } from './hola-mundo2.service';

describe('HolaMundo2Service', () => {
  let service: HolaMundo2Service;
 //change
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolaMundo2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
