import { TestBed } from '@angular/core/testing';

import { TicketQueueService } from './ticket-queue.service';

describe('TicketQueueService', () => {
  let service: TicketQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
