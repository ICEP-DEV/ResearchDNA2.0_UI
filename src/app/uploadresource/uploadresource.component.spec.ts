import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadresourceComponent } from './uploadresource.component';

describe('UploadresourceComponent', () => {
  let component: UploadresourceComponent;
  let fixture: ComponentFixture<UploadresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadresourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
