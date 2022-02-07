import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmCheckComponent } from './mm-check.component';

describe('MmCheckComponent', () => {
  let component: MmCheckComponent;
  let fixture: ComponentFixture<MmCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
