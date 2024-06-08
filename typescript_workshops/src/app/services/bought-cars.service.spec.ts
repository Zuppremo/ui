import { TestBed } from '@angular/core/testing';

import { BoughtCarsService } from './bought-cars.service';

describe('BoughtCarsService', () => {
  let service: BoughtCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoughtCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
