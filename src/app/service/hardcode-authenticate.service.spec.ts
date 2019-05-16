import { TestBed } from '@angular/core/testing';

import { HardcodeAuthenticateService } from './hardcode-authenticate.service';

describe('HardcodeAuthenticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodeAuthenticateService = TestBed.get(HardcodeAuthenticateService);
    expect(service).toBeTruthy();
  });
});
