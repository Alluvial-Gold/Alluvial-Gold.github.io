import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmRowComponent } from './mm-row.component';

describe('MmRowComponent', () => {
  let component: MmRowComponent;
  let fixture: ComponentFixture<MmRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
