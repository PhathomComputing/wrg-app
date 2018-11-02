import { TestBed, inject } from '@angular/core/testing';

import { WrgServiceService } from './wrg-service.service';

describe('WrgServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WrgServiceService]
    });
  });

  it('should be created', inject([WrgServiceService], (service: WrgServiceService) => {
    expect(service).toBeTruthy();
  }));
});
