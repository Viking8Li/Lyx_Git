import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSProjectComponent } from './jsproject.component';

describe('JSProjectComponent', () => {
  let component: JSProjectComponent;
  let fixture: ComponentFixture<JSProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JSProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JSProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
