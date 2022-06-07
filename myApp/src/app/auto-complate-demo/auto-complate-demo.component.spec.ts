import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoComplateDemoComponent } from './auto-complate-demo.component';

describe('AutoComplateDemoComponent', () => {
  let component: AutoComplateDemoComponent;
  let fixture: ComponentFixture<AutoComplateDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoComplateDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoComplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
