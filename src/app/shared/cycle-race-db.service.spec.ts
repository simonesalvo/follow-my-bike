import { TestBed, inject } from '@angular/core/testing';

import { CycleRaceDbService } from './cycle-race-db.service';

describe('CycleRaceDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CycleRaceDbService]
    });
  });

  it('should be created', inject([CycleRaceDbService], (service: CycleRaceDbService) => {
    expect(service).toBeTruthy();
  }));
});
