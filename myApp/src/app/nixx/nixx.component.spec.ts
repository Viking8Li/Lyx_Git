import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NixxComponent } from './nixx.component';

describe('NixxComponent', () => {
  let component: NixxComponent;
  let fixture: ComponentFixture<NixxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NixxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NixxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
