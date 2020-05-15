import { TestBed } from '@angular/core/testing';

import { OrderCateringService } from './order-catering.service';

describe('OrderCateringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderCateringService = TestBed.get(OrderCateringService);
    expect(service).toBeTruthy();
  });
});
