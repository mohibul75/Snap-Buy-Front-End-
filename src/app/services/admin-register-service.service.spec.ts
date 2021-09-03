import { TestBed } from '@angular/core/testing';

import { AdminRegisterServiceService } from './admin-register-service.service';

describe('AdminRegisterServiceService', () => {
  let service: AdminRegisterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRegisterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
