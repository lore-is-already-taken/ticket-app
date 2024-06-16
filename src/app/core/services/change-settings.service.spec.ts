import { TestBed } from '@angular/core/testing';

import { ChangeSettingsService } from './change-settings.service';

describe('ChangeSettingsService', () => {
  let service: ChangeSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
