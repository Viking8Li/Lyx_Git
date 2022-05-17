import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildM1Component } from './child-m1.component';

describe('ChildM1Component', () => {
  let component: ChildM1Component;
  let fixture: ComponentFixture<ChildM1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildM1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
