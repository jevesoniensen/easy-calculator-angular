import { TestBed } from '@angular/core/testing';

import { AccountEntriesService } from './account-entries.service';

describe('AccountEntriesService', () => {
  let service: AccountEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
