import { TestBed } from '@angular/core/testing';
import { RestrictionService } from './restriction.service';
import { HttpClientModule } from '@angular/common/http';
describe('RestrictionService', () => {
  let service: RestrictionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RestrictionService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});