import { TestBed } from '@angular/core/testing';

import { HolaMundo3Service } from './hola-mundo3.service';

describe('HolaMundo3Service', () => {
  let service: HolaMundo3Service;
  //hglkjhgkjh
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolaMundo3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
