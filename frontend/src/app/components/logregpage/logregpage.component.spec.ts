import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogregpageComponent } from './logregpage.component';

describe('LogregpageComponent', () => {
  let component: LogregpageComponent;
  let fixture: ComponentFixture<LogregpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogregpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogregpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
