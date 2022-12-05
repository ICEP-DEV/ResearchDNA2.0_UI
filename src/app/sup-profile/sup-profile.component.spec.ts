import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupProfileComponent } from './sup-profile.component';

describe('SupProfileComponent', () => {
  let component: SupProfileComponent;
  let fixture: ComponentFixture<SupProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
