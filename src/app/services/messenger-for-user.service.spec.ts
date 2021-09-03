import { TestBed } from '@angular/core/testing';

import { MessengerForUserService } from './messenger-for-user.service';

describe('MessengerForUserService', () => {
  let service: MessengerForUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengerForUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
