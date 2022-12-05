import { TestBed } from '@angular/core/testing';

import { StudentProjectServicesService } from './student-project-services.service';

describe('StudentProjectServicesService', () => {
  let service: StudentProjectServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentProjectServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
