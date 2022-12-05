import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorchatComponent } from './supervisorchat.component';

describe('SupervisorchatComponent', () => {
  let component: SupervisorchatComponent;
  let fixture: ComponentFixture<SupervisorchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
