import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchtoolsComponent } from './researchtools.component';

describe('ResearchtoolsComponent', () => {
  let component: ResearchtoolsComponent;
  let fixture: ComponentFixture<ResearchtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchtoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
