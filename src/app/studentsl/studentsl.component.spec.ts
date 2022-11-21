import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentslComponent } from './studentsl.component';

describe('StudentslComponent', () => {
  let component: StudentslComponent;
  let fixture: ComponentFixture<StudentslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentslComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
