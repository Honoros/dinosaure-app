import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurepageComponent } from './dinosaurepage.component';

describe('DinosaurepageComponent', () => {
  let component: DinosaurepageComponent;
  let fixture: ComponentFixture<DinosaurepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaurepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaurepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
