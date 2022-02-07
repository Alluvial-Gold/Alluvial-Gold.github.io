import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmIconComponent } from './mm-icon.component';

describe('MmIconComponent', () => {
  let component: MmIconComponent;
  let fixture: ComponentFixture<MmIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
